import {Component, OnInit} from '@angular/core';
import {ApiDataService} from "./api-data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dezzer-dvt';

  search$ : Observable<any>;
  searchArtist$ : Observable<any>;
  artist$ : Observable<any>;

  constructor(
    public dataService: ApiDataService

  ) {
  }


  ngOnInit(): void {
    this.search$ = this.dataService.searchArtists('jayz')
    // this.searchArtist$ = this.dataService.searchMusic('jayz')
    this.artist$ = this.dataService.getArtist('123')
  }
}
