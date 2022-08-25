import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-artist',
  template: `
    <p>
      selected-artist works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedArtistPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
