import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtistsComponent} from "./artists/artists.component";
import {ArtistDetailComponent} from "./artists/artist-detail/artist-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'artists', pathMatch: 'full'},

  {
    path: ':id/details',
    component: ArtistDetailComponent,
    data: {title: 'Deezer Artist Details'}
  },
  {
    path: 'artists',
    component: ArtistsComponent,
    data: {title: 'Deezer Artists'},
  },

  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
