import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Artist, ArtistSearchResult} from "../models";

@Component({
  selector: 'app-artist-preview',
  template: `
    <a [routerLink]="['/artists', id]">
      <mat-card>
        <mat-card-title-group>
          <img mat-card-sm-image *ngIf="thumbnail" [src]="thumbnail"/>
          <mat-card-title>{{ title  }}</mat-card-title>
          <mat-card-subtitle *ngIf="subtitle">{{
            subtitle
            }}</mat-card-subtitle>
        </mat-card-title-group>
        <mat-card-content>
          <p *ngIf="description">{{ description }}</p>
        </mat-card-content>
<!--        {{artistData | json}}-->
      </mat-card>
    </a>
  `,
  styles: [
    `
      :host {
        display: flex;
      }

      :host a {
        display: flex;
      }

      mat-card {
        width: 400px;
        margin: 15px;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
      }

      @media only screen and (max-width: 768px) {
        mat-card {
          margin: 15px 0 !important;
        }
      }
      mat-card:hover {
        box-shadow: 3px 3px 16px -2px rgba(0, 0, 0, 0.5);
      }
      mat-card-title {
        margin-right: 10px;
      }
      mat-card-title-group {
        margin: 0;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      img {
        width: 60px;
        min-width: 60px;
        margin-left: 5px;
      }
      mat-card-content {
        margin-top: 15px;
        margin: 15px 0 0;
      }
      span {
        display: inline-block;
        font-size: 13px;
      }
      mat-card-footer {
        padding: 0 25px 25px;
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
    return this.artistData.title;
  }

  get subtitle() {
    return this.artistData.type;
  }

  get description() {
    return this.artistData.artist.name;
  }

  get thumbnail(): string | boolean {
    if (this.artistData.artist.picture) {
      return this.artistData.artist.picture
    }

    return false;
  }

}
