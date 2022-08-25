import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ApiDataService} from "../../api-data.service";

@Component({
  selector: 'app-artists',
  template: `
    <div *ngIf="search$ | async as vd" >
      <pre>{{  vd | json }}</pre>
    </div>
  `,
  styles: [
  ]
})
export class ArtistsComponent implements OnInit {

  search$ : Observable<any>;


  constructor(
    public dataService: ApiDataService

  ) {
  }
  ngOnInit(): void {
    this.search$ = this.dataService.searchArtists('jayz')
  }

}
