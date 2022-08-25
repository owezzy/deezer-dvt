import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyArtistsCollectionPageComponent} from "./containers/my-artists-collection-page.component";
import {ViewArtistPageComponent} from "./containers/view-artist-page.component";
import {SearchArtistsPageComponent} from "./containers/search-artists-page.component";
import {ArtistsComponent} from "./components/artists.component";
import {ArtistExistsGuard} from "./guards";

const routes: Routes = [

  {
    path: 'all',
    component: ArtistsComponent,
    data: {title: 'Deezer Artists'},
  },
  {
    path: 'search',
    component: SearchArtistsPageComponent,
    data: {title: 'Deezer Artists'},
  },
  {
    path: ':id',
    component: ViewArtistPageComponent,
    // canActivate: [ArtistExistsGuard],

    data: {title: 'Artist Details'}
  }, {
    path: '',
    component: MyArtistsCollectionPageComponent,
    data: {title: 'My Artists Collection'}
  },
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
