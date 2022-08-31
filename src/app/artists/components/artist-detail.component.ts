import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Album, Artist, ArtistSearchResult, ArtistTopTrack} from "../models";
import {ArtistAlbumsStore} from "../component-store/artist-albums.store";
import {Observable} from "rxjs";
import {ArtistTopTracksStore} from "../component-store/artist-top-tracks.store";
import {MediaObserver} from "@angular/flex-layout";

@Component({
  selector: 'app-artist-detail',
  template: `
    <mat-card>
      <div class="toptracks-container">
        <mat-card class="artist-details" fxLayout="row" fxLayoutAlign="space-between stretch">
          <mat-card fxFlex.xs>
          <img mat-card-image [src]="artist.picture_medium" alt="Artist_Image">
            <mat-card-content>
              <div fxLayout="column" fxLayoutAlign="space-between start" >
              <span>{{artist.name}}</span>
              <span>
                <strong>
                  {{artist.nb_fan | convertFans}}
                </strong>fans</span>
              </div>
            </mat-card-content>
          </mat-card>

          <div class="artist-top-tracks" [hidden]="media.isActive('xs')" fxFlex>
            <app-artist-top-tracks [topTracks]="topTracks$"></app-artist-top-tracks>
          </div>

        </mat-card>

      </div>

      <div class="artist-album">
          <app-artist-albums [albums]="albums$"></app-artist-albums>
      </div>
    </mat-card>
  `,
  styles: [`
    :host {
      //display: flex;
      //justify-content: center;
    }
    .artist-top-tracks{
      margin: 8px;
      span {
        //overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
      }


    }
    .artist-album{
      margin-top: 21px;
    }


      mat-card img {
        max-width: 400px;
        max-height: 400px;
      }

    .artist-details {
      margin-top: 60px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ArtistAlbumsStore, ArtistTopTracksStore]
})
export class ArtistDetailComponent implements OnInit {
  @Input() artist!: ArtistSearchResult
  @Input() inCollection!: boolean;
  @Output() add = new EventEmitter<ArtistSearchResult>();
  @Output() remove = new EventEmitter<ArtistSearchResult>();

  // component store data
  albums$: Observable<Album[]> = this.artistAlbumsStore.artistAlbums$
  topTracks$: Observable<any> = this.artistTopTracksStore.artistTopTracks$


  constructor(
    private readonly artistAlbumsStore: ArtistAlbumsStore,
    private readonly artistTopTracksStore: ArtistTopTracksStore,
    public media: MediaObserver,

  ) {
  }

  ngOnInit(): void {
    // initial artist component data store
    this.artistAlbumsStore.setArtistAlbums(this.artist.id)
    this.artistTopTracksStore.setArtistTopTracks(this.artist.id)
  }

}
