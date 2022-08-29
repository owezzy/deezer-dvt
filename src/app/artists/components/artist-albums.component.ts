import {Component, Input, OnInit} from '@angular/core';
import {Observable, share, tap} from "rxjs";

@Component({
  selector: 'app-artist-albums',
  template: `

    <div *ngIf="albums | async as albumData">
      <div *ngFor="let album of albumData.data">

        <mat-card>
          <img mat-card-image [src]="album.cover_big">
          <mat-card-content>
            <h2>{{album.title}}</h2>
              {{album.release_date | date : "y"}}
          </mat-card-content>
        </mat-card>
      </div>

    </div>
  `,
  styles: []
})
export class ArtistAlbumsComponent implements OnInit {
  @Input() albums: Observable<any>

  constructor() {
  }

  ngOnInit(): void {
    this.albums.pipe(tap((data) => {
      console.log("------albums---------", data)
    }), share()).subscribe()
  }

}
