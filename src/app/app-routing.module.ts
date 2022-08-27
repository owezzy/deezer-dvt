import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundPageComponent} from "./core/containers/not-found-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/artists', pathMatch: 'full'},
  {
    path: 'artists',
    loadChildren: () => import('./artists/artists.module').then(
      search => search.ArtistsModule)
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: { title: 'Not found' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true,
    enableTracing: true,
    paramsInheritanceStrategy: 'always',
    onSameUrlNavigation: 'ignore',
    relativeLinkResolution: 'legacy',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
