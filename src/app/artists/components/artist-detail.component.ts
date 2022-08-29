import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Album, Artist, ArtistSearchResult, ArtistTopTrack} from "../models";
import {ArtistAlbumsStore} from "../component-store/artist-albums.store";
import {Observable} from "rxjs";
import {ArtistTopTracksStore} from "../component-store/artist-top-tracks.store";

@Component({
  selector: 'app-artist-detail',
  template: `
    <mat-card>
      <div>
        <div class="artist-details">
          <mat-card class="example-card">
            <mat-card-header>
              <mat-card-title>{{artist.name}}</mat-card-title>
            </mat-card-header>
            <img mat-card-image [src]="artist.picture_medium" alt="Artist_Image">
            <mat-card-content>
              <h3>
                <strong>
                {{artist.nb_fan | convertFans}}
                </strong>fans</h3>
            </mat-card-content>
          </mat-card>

        </div>
        <div class="artist-top-tracks">
          <app-artist-top-tracks [topTracks]="topTracks$"></app-artist-top-tracks>
        </div>

        <div class="artist-albums">
          <app-artist-albums [albums]="albums$"></app-artist-albums>
        </div>

      </div>
    </mat-card>
  `,
  styles: [],
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
    private readonly artistTopTracksStore: ArtistTopTracksStore
  ) {
  }

  ngOnInit(): void {
    // initial artist component data store
    this.artistAlbumsStore.setArtistAlbums(this.artist.id)
    this.artistTopTracksStore.setArtistTopTracks(this.artist.id)
  }

}
