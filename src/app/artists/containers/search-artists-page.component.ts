import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as fromArtists from '../reducers';
import {ArtistSearchResult} from "../models";

@Component({
  selector: 'app-search-artists',
  template: `
    <app-artist-preview-list [artists]="(searchResults$ | async)!"> </app-artist-preview-list>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchArtistsPageComponent {
  searchResults$: Observable<ArtistSearchResult[]>;

  constructor(
    private store: Store

  ) {
    this.searchResults$ = store.select(fromArtists.selectSearchResults)
 }

}
