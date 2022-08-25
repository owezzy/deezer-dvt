import {Component, OnInit} from '@angular/core';
import {ApiDataService} from "../services";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

import * as fromRoot from '../../Store';
import {LayoutActions} from "../actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'deezer-dvt';

  showSidenav$: Observable<boolean>;

  search$ : Observable<any>;
  searchArtist$ : Observable<any>;
  artist$ : Observable<any>;

  constructor(
    public dataService: ApiDataService,
    private store: Store
  ) {
    this.showSidenav$ = this.store.select(fromRoot.selectShowSidenav);
  }


  ngOnInit(): void {
    this.search$ = this.dataService.searchArtists('jayz')
    // this.searchArtist$ = this.dataService.searchMusic('jayz')
    this.artist$ = this.dataService.getArtist('123')
  }

  closeSidenav() {
    this.store.dispatch(LayoutActions.closeSidenav());
  }

  openSidenav() {
    this.store.dispatch(LayoutActions.openSidenav());
  }
}
