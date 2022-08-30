import {Component, Input, OnInit} from '@angular/core';
import {Observable, share, tap} from "rxjs";

@Component({
  selector: 'app-artist-top-tracks',
  template: `
    <div *ngIf="topTracks | async as topTracksData">
      <mat-card>
        <mat-card-title>Top tracks</mat-card-title>
        <mat-selection-list #tracks [multiple]="false">
          <mat-list-option *ngFor="let track of topTracksData" [value]="track.preview">
            {{track.title}}
            {{track.duration  | convertDuration }}
          </mat-list-option>
        </mat-selection-list>

<!--        <p>-->
<!--          Option selected: {{tracks.selectedOptions.selected[0]?.value}}-->
<!--        </p>-->
        <vm-player controls autoplay>
          <vm-audio cross-origin="true" preload="auto">
            <source [attr.data-src]=[tracks.selectedOptions.selected[0]?.value] type="audio/mp3">
            <track [attr.src]=tracks.selectedOptions.selected[0]?.value>
          </vm-audio>
        </vm-player>
      </mat-card>
    </div>

  `,
  styles: [
    `mat-card-title{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;

    }`

  ]
})
export class ArtistTopTracksComponent implements OnInit {
  @Input() topTracks: Observable<any>

  constructor() {
  }

  ngOnInit(): void {
    this.topTracks.pipe(tap((data) => {
      console.log("------topTracks---------", data)
    }), share()).subscribe()
  }

}
