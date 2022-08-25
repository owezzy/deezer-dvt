import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Artist, ArtistSearchResult} from "../models";

@Component({
  selector: 'app-artist-preview-list',
  template: `
    <app-artist-preview *ngFor="let artist of artists" [artistData]="artist"></app-artist-preview>

  `,
  styles: [
    `      :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistPreviewListComponent {
@Input() artists: any[]
}
