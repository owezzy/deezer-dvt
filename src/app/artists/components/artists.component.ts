import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ApiDataService} from "../../core/services/api-data.service";

@Component({
  selector: 'app-components',
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
