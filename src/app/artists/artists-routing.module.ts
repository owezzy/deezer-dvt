import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewArtistPageComponent} from "./containers/view-artist-page.component";
import {SearchArtistsPageComponent} from "./containers/search-artists-page.component";
import {ArtistExistsGuard} from "./guards";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/artist',
    pathMatch: 'full',
  },
  {
    path: 'artist',
    component: SearchArtistsPageComponent,
    data: {title: 'Deezer Artists'},
  },
  {
    path: 'artist/:id',
    component: ViewArtistPageComponent,
    canActivate: [ArtistExistsGuard],
    data: {title: 'Artist Details'}
  },
  // {
  //   path: '',
  //   component: MyArtistsCollectionPageComponent,
  //   data: {title: 'My Artists Collection'}
  // },
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
