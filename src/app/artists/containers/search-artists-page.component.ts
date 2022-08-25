import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as fromArtists from '../reducers';
import {take} from "rxjs/operators";
import {SearchArtistPageActions} from "../actions";
import {ArtistSearchResult} from "../models";

@Component({
  selector: 'app-search-artists',
  template: `
    <app-search-artist
      [query]="(searchQuery$ | async)!"
      [searching]="(loading$ | async)!"
      [error]="(error$ | async)!"
      (search)="search($event)"
    >
    </app-search-artist>
    <app-artist-preview-list [artists]="(searchResults$ | async)!"> </app-artist-preview-list>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchArtistsPageComponent {
  searchQuery$: Observable<string>;
  searchResults$: Observable<ArtistSearchResult[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;
  constructor(
    private store: Store

  ) {
    this.searchQuery$ = store.select(fromArtists.selectSearchQuery).pipe(take(1))
    this.searchResults$ = store.select(fromArtists.selectSearchResults)
    this.loading$ = store.select(fromArtists.selectSearchLoading);
    this.error$ = store.select(fromArtists.selectSearchError); }

  search(query: string) {
    this.store.dispatch(SearchArtistPageActions.searchArtists({ query }));
  }

}
