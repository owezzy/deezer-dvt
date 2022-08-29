import { Component, OnInit } from '@angular/core';
import {ArtistSearchResult} from "../models";
import {Store} from "@ngrx/store";
import {CollectionPageActions} from "../actions";
import {Observable} from "rxjs";
import * as fromArtists from '../reducers'

@Component({
  selector: 'app-artists-collection',
  template: `
    <div class="artists-collection-container">

    <p>
      artists-collection works!
    </p>
      <app-artist-preview-list [artists]="(artists$ | async)!"></app-artist-preview-list>

    </div>
  `,
  styles: [
    ` .artists-collection-container{

    }`
  ]
})
export class MyArtistsCollectionPageComponent implements OnInit {

  artists$: Observable<ArtistSearchResult[]>;

  constructor(private store: Store) {
    this.artists$ = store.select(fromArtists.selectArtistCollection);
  }

  ngOnInit() {
    this.store.dispatch(CollectionPageActions.enter());
  }

}
