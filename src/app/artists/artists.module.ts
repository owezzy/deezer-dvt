import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import {ArtistsComponent} from "./components/artists.component";
import { MyArtistsCollectionPageComponent } from './containers/my-artists-collection-page.component';
import { SearchArtistsPageComponent } from './containers/search-artists-page.component';
import { SelectedArtistPageComponent } from './containers/selected-artist-page.component';
import { ViewArtistPageComponent } from './containers/view-artist-page.component';
import { ArtistPreviewComponent } from './components/artist-preview.component';
import { ArtistPreviewListComponent } from './components/artist-preview-list.component';
import {ArtistDetailComponent} from "./components/artist-detail.component";

import * as fromArtists from './reducers';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {ArtistsEffects, CollectionEffects} from "./effects";
import {MaterialModule} from "../material";
import {CoreModule} from "../core";
import {NgxUiLoaderModule} from "ngx-ui-loader";
export const CONTAINERS =[
  SearchArtistsPageComponent,
  ViewArtistPageComponent,
  SelectedArtistPageComponent,
  MyArtistsCollectionPageComponent
]
export const COMPONENT =[
  ArtistsComponent,
  ArtistDetailComponent,
  ArtistPreviewComponent,
  ArtistPreviewListComponent,
]

@NgModule({
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    MaterialModule,
    StoreModule.forFeature(fromArtists.artistFeatureStateKey, fromArtists.reducers),
    EffectsModule.forFeature([ArtistsEffects, CollectionEffects]),
    NgxUiLoaderModule,
    CoreModule
  ],
  declarations: [
    CONTAINERS, COMPONENT
  ],
  exports: []
})
export class ArtistsModule { }
