import {ComponentStore, tapResponse} from "@ngrx/component-store";
import {Album} from "../models";
import {Injectable} from "@angular/core";
import {ApiDataService} from "../../core/services";
import {concatMap, Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

export interface AlbumsState {
  artistId: string | null;
  albums: Album[];
  responseIsEmpty?: boolean;

}
/*this store holds data for the artist album  view*/

@Injectable()
export class ArtistAlbumsStore extends ComponentStore<AlbumsState> {
  constructor(private apiDataService: ApiDataService) {
    super({albums: [], artistId: null});
  }

  // *********** Updaters *********** //
  readonly addAlbums = this.updater((state, value: AlbumsState) => ({
    artistId: value.artistId,
    albums: value.albums
  }))
  readonly addArtistId = this.updater((state, value: AlbumsState) => ({
    artistId: value.artistId,
    albums: state.albums
  }))

  // *********** Selectors *********** //

  readonly artistId$: Observable<string> = this.select((state) => state.artistId)

  readonly artistAlbums$: Observable<Album[]> = this.select((state) => state.albums)

  // *********** Effects *********** //
  readonly setArtistAlbums = this.effect((artistID: Observable<string>) => {
    return artistID.pipe(
      concatMap((id) => {
        return this.apiDataService.getArtistAlbums(id).pipe(
          tapResponse((resp) =>

              this.setState({
              albums: resp,
              artistId: id
            }),
            (data: HttpErrorResponse) => {
              console.error('---error---', data);
              this.patchState({
                albums: null,
                responseIsEmpty: false,
              });

              if (data.status === 404) {
                this.setState({
                  albums: [],
                  artistId: id,
                  responseIsEmpty: true,
                });
              }
            })
        );
      }));
    })
}
