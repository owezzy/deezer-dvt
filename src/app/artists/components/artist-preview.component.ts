import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Artist, ArtistSearchResult} from "../models";

@Component({
  selector: 'app-artist-preview',
  template: `
<div class="grid">

    <a [routerLink]="['/artists','artist', id]">
      <mat-card class="mat-elevation-z4 multiview">
        <img mat-card-image *ngIf="thumbnail" [src]="thumbnail"/>
        <mat-card-actions>
          <span>{{ title  }}</span>
          <span *ngIf="subtitle">{{subtitle}}</span>
          <strong>
            <p *ngIf="description">{{ description | convertFans}} fans</p>
          </strong>
        </mat-card-actions>
        <!--        {{artistData | json}}-->
      </mat-card>
    </a>
</div>
  `,
  styles: [
    `

      a{
        text-decoration-line: none;

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

    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistPreviewComponent {
  @Input() artistData!: ArtistSearchResult;

  get id() {
    return this.artistData.id;
  }

  get title() {
    return this.artistData.name;

  }

  get subtitle() {
    return this.artistData.title;


  }

  get description() {
    if (Number(this.artistData.nb_fan) <= 0){
      return "0"
    } else {
      return this.artistData.nb_fan;
    }
  }

  get thumbnail(): string | boolean {
    if (this.artistData) {
      return this.artistData.picture_medium
    }

    return false;
  }

}
