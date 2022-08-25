import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtistsComponent} from "./components/artists.component";
import {ArtistDetailComponent} from "./components/artist-detail/artist-detail.component";
import {ArtistsCollectionComponent} from "./containers/artists-collection/artists-collection.component";

const routes: Routes = [

  {
    path: 'search',
    component: ArtistsComponent,
    data: {title: 'Deezer Artists'},
  },
  {
    path: ':id',
    component: ArtistDetailComponent,
    data: {title: 'Artist Details'}
  }, {
    path: '',
    component: ArtistsCollectionComponent,
    data: {title: 'My Artists Collection'}
  },
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
