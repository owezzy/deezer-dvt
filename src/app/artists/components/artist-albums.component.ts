import {Component, Input, OnInit} from '@angular/core';
import {Observable, share, tap} from "rxjs";

@Component({
  selector: 'app-artist-albums',
  template: `

      <mat-card-title>Albums</mat-card-title>
      <div class="grid" *ngIf="albums | async as albumData">
      <div *ngFor="let album of albumData.data">

        <mat-card>
          <img mat-card-image [src]="album.cover_big">
          <mat-card-actions>
            <span>{{album.title}}</span>
            <span>
              {{album.release_date | date : "y"}}
            </span>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `
      mat-card img {
        max-width: 400px;
        max-height: 400px;
        height: 100%;
      }
      mat-card-title{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;

      }

      mat-card-actions{
        margin: 0;

        span {
          overflow: hidden;
          display: block;
          height: 1.2em;
          width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 8px;
          padding-bottom: 8px;
        }
      }

    `

  ]
})
export class ArtistAlbumsComponent implements OnInit {
  @Input() albums: Observable<any>

  constructor() {
  }

  ngOnInit(): void {
    // this.albums.pipe(tap((data) => {
    //   console.log("------albums---------", data)
    // }), share()).subscribe()
  }

}
