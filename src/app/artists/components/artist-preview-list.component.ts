import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Artist, ArtistSearchResult} from "../models";

@Component({
  selector: 'app-artist-preview-list',
  template: `
    <div class="grid">
    <app-artist-preview *ngFor="let artist of artists" [artistData]="artist"></app-artist-preview>
    </div>

  `,
  styles: [
    `      :host {

    }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistPreviewListComponent {
@Input() artists: ArtistSearchResult[]
}
