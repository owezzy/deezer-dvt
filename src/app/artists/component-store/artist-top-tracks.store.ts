import {ComponentStore, tapResponse} from "@ngrx/component-store";
import {Album, ArtistTopTrack} from "../models";
import {ApiDataService} from "../../core/services";
import {concatMap, Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";

export interface ArtistsTopTrackState{
  artistId: string | null;
  topTracks: ArtistTopTrack[];
  responseIsEmpty?: boolean;

}

@Injectable()
export class ArtistTopTracksStore extends ComponentStore<ArtistsTopTrackState> {
  constructor(private apiDataService: ApiDataService) {
    super({topTracks: [], artistId: null});
  }

  // *********** Updaters *********** //
  readonly addTopTracks = this.updater((state, value:ArtistsTopTrackState ) => ({
    artistId: value.artistId,
    topTracks: value.topTracks
  }))

  readonly addArtistId = this.updater((state, value: ArtistsTopTrackState) => ({
    artistId: value.artistId,
    topTracks: state.topTracks
  }))

  // *********** Selectors *********** //

  readonly artistId$: Observable<string> = this.select((state) => state.artistId)

  readonly artistTopTracks$: Observable<ArtistTopTrack[]> = this.select((state) => state.topTracks)

  // *********** Effects *********** //
  readonly setArtistTopTracks = this.effect((artistID: Observable<string>) => {
    return artistID.pipe(
      concatMap((id) => {
        return this.apiDataService.getArtistTopTracks(id).pipe(
          tapResponse((resp) =>

              this.setState({
                topTracks: resp,
                artistId: id
              }),
            (data: HttpErrorResponse) => {
              console.error('---error---', data);
              this.patchState({
                topTracks: null,
                responseIsEmpty: false,
              });

              if (data.status === 404) {
                this.setState({
                  topTracks: [],
                  artistId: id,
                  responseIsEmpty: true,
                });
              }
            })
        );
      }));
  })
}
