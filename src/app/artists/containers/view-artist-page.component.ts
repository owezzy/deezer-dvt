import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-artist',
  template: `
    <p>
      view-artist works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewArtistPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
