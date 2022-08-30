import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Artist, ArtistSearchResult} from "../models";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as fromArtists from '../reducers'
import {SelectedArtistPageActions} from "../actions";
import {ArtistAlbumsStore} from "../component-store/artist-albums.store";

@Component({
  selector: 'app-selected-artist-page',
  template: `
    <app-artist-detail
      [artist]="( artist$| async )!">
    </app-artist-detail>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SelectedArtistPageComponent implements OnInit {

  artist$: Observable<ArtistSearchResult>;
  isSelectedArtistsInCollection$: Observable<boolean>;


  constructor(private store: Store) {
    this.artist$ = store.select(fromArtists.selectSelectedArtist) as Observable<ArtistSearchResult>;
  }

   ngOnInit() {

   }
}
