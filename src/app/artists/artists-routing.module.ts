import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewArtistPageComponent} from "./containers/view-artist-page.component";
import {SearchArtistsPageComponent} from "./containers/search-artists-page.component";
import {ArtistExistsGuard} from "./guards";

const routes: Routes = [
  {
    path: '',
    component: SearchArtistsPageComponent,
    data: {title: 'Deezer Artists'},
  },
  {
    path: ':id',
    component: ViewArtistPageComponent,
    canActivate: [ArtistExistsGuard],
    data: {title: 'Artist Details'}
  },

  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
