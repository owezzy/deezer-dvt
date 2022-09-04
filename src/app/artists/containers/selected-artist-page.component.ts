import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Artist, ArtistSearchResult } from '../models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromArtists from '../reducers';

@Component({
  selector: 'app-selected-artist-page',
  template: `
    <app-artist-detail [artist]="(artist$ | async)!"> </app-artist-detail>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedArtistPageComponent {
  artist$: Observable<ArtistSearchResult>;

  constructor(private store: Store) {
    this.artist$ = store.select(
      fromArtists.selectSelectedArtist
    ) as Observable<ArtistSearchResult>;
  }
}
