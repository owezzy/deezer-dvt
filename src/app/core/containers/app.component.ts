import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiDataService} from "../services";
import {Observable, share, tap} from "rxjs";
import {Store} from "@ngrx/store";

import * as fromRoot from '../../Store';
import {LayoutActions} from "../actions";
import {MediaObserver} from "@angular/flex-layout";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

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
  @ViewChild('searchbar') searchbar:ElementRef;

  constructor(
    public dataService: ApiDataService,
    private store: Store,
    public media: MediaObserver,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,

  ) {
    this.showSidenav$ = this.store.select(fromRoot.selectShowSidenav);
    iconRegistry.addSvgIcon(
      'deezer',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/deezer-logo/SVG/Deezer_Logo_RVB_White.svg')
    );
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
