import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(
      search => search.SearchModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true,
    enableTracing: true

  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
