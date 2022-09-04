import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { SearchArtistPageActions } from '../../artists/actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ArtistSearchResult } from '../../artists/models';
import { take } from 'rxjs/operators';
import * as fromArtists from '../../artists/reducers';
import { InterceptorService } from '../services/interceptor.service';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar class="main-header mat-elevation-z4">
      <mat-toolbar-row fxLayoutAlign="space-between center">
        <button mat-icon-button aria-label="menu">
          <mat-icon (click)="openMenu.emit($event)" color="accent"
            >menu</mat-icon
          >
        </button>
        <app-search-bar
          [query]="(searchQuery$ | async)!"
          [searching]="(loading$ | async)!"
          [error]="(error$ | async)!"
          (search)="search($event)"
        >
        </app-search-bar>
        <button
          style="margin-right: 33px"
          [hidden]="interceptorService.corsStatusObservable$ | async"
        >
          <a
            mat-mini-fab
            color="warn"
            target="_blank"
            [href]="interceptorService.CORS_ENDPOINT"
            >Cors</a
          >
        </button>
        <div fxLayout="row" fxLayoutAlign="space-between center">
          <ng-content></ng-content>
          <mat-icon class="site_logo" svgIcon="deezer"></mat-icon>
        </div>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: [
    `
      .mat-toolbar {
        background-color: #242328;
        color: #4c4e54;
      }
      .site_logo {
        width: 44px;
        height: 44px;
        transform: scale(2);
        margin-right: 13px;
      }

      header {
        position: fixed;
        top: 0;
        z-index: 1;
        transition: all 250ms ease-in-out;
      }
      .main-header {
        @extend header;
        &.hidden {
          opacity: 0;
        }
      }
    `,
  ],
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
  searchQuery$: Observable<string>;
  searchResults$: Observable<ArtistSearchResult[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(
    private store: Store,
    public interceptorService: InterceptorService
  ) {
    this.searchQuery$ = store
      .select(fromArtists.selectSearchQuery)
      .pipe(take(1));
    this.searchResults$ = store.select(fromArtists.selectSearchResults);
    this.loading$ = store.select(fromArtists.selectSearchLoading);
    this.error$ = store.select(fromArtists.selectSearchError);
  }

  search(query: string) {
    const resourceName = 'artist';
    this.store.dispatch(
      SearchArtistPageActions.searchArtists({ query, resourceName })
    );
  }
}
