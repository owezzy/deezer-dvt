import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-detail',
  template: `
    <p>
      artist-detail works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
