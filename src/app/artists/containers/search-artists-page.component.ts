import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as fromArtists from '../reducers';
import {ArtistSearchResult} from "../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search-artists',
  template: `
    <div class="multiview-container">
      <app-artist-preview-list [artists]="(searchResults$ | async)!"> </app-artist-preview-list>
    </div>
  `,
  styles: [
    `.multiview-container {
      width: 100%;
      height: 100vh;
      overflow: scroll;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchArtistsPageComponent {
  searchResults$: Observable<ArtistSearchResult[]>;

  constructor(
    private store: Store,
  ) {
    this.searchResults$ = store.select(fromArtists.selectSearchResults)
 }


}
