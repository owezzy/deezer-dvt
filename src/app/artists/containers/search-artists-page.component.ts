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
      height: 95vh;
      overflow: scroll;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchArtistsPageComponent implements OnInit {
  searchResults$: Observable<ArtistSearchResult[]>;
  params = new Map<string, string>();

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,


  ) {
    this.searchResults$ = store.select(fromArtists.selectSearchResults)
 }

 ngOnInit(){
   this.route.queryParams.subscribe((qparams) => {
     this.params.set('resource_name', 'artist');
     this.params.set('q', qparams['q']);
     // if (qparams.number === undefined) {
     //   this.params.delete('name');
     // } else {
     //   this.params.set('name', `[anywords]${this.params.get('name')}`);
     // }
     // this.params.set('page_length', qparams.page_length);
     // this.params.set('order_by', qparams.order_by);
     // if (typeof qparams.page_number != undefined) {
     //   this.params.set('page_number', qparams.page_number);
     // }

     console.log(
       '..........multiviewResourceService...URLSearchParams.....................',
       this.params
     );
     // console.log(
     //   '..........multiviewResourceService...resourceName.....................',
     //   this.resourceName
   });

 }

}
