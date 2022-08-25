import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import {ArtistsComponent} from "./artists/artists.component";
import {ArtistDetailComponent} from "./artists/artist-detail/artist-detail.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistDetailComponent

  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    RouterModule
  ]
})
export class SearchModule { }
