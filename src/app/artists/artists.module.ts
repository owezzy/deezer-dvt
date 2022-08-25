import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import {ArtistsComponent} from "./components/artists.component";
import {RouterModule} from "@angular/router";
import { MyArtistsCollectionPageComponent } from './containers/my-artists-collection-page.component';
import { SearchArtistsPageComponent } from './containers/search-artists-page.component';
import { SelectedArtistPageComponent } from './containers/selected-artist-page.component';
import { ViewArtistPageComponent } from './containers/view-artist-page.component';
import { SearchArtistComponent } from './components/search-artist.component';
import { ArtistPreviewComponent } from './components/artist-preview.component';
import { ArtistPreviewListComponent } from './components/artist-preview-list.component';
import {ArtistDetailComponent} from "./components/artist-detail.component";

import * as fromArtists from './reducers';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {ArtistsEffects, CollectionEffects} from "./effects";
import {MaterialModule} from "../material";


@NgModule({
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    MaterialModule,
    StoreModule.forFeature(fromArtists.artistFeatureStateKey, fromArtists.reducers),
    EffectsModule.forFeature([ArtistsEffects, CollectionEffects])
  ],
  declarations: [
    ArtistsComponent,
    ArtistDetailComponent,
    MyArtistsCollectionPageComponent,
    SearchArtistsPageComponent,
    SelectedArtistPageComponent,
    ViewArtistPageComponent,
    SearchArtistComponent,
    ArtistPreviewComponent,
    ArtistPreviewListComponent
  ],

})
export class ArtistsModule { }
