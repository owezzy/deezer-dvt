import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import {ArtistsComponent} from "./components/artists.component";
import {ArtistDetailComponent} from "./components/artist-detail/artist-detail.component";
import {RouterModule} from "@angular/router";
import { ArtistsCollectionComponent } from './containers/artists-collection/artists-collection.component';


@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistDetailComponent,
    ArtistsCollectionComponent

  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    RouterModule
  ]
})
export class ArtistsModule { }
