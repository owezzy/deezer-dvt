import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists-collection',
  template: `
    <div class="artists-collection-container">

    <p>
      artists-collection works!
    </p>

    </div>
  `,
  styles: [
    ` .artists-collection-container{

    }`
  ]
})
export class MyArtistsCollectionPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
