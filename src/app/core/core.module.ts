import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundPageComponent} from "./containers/not-found-page.component";
import {AppComponent} from "./containers/app.component";
import {MaterialModule} from "../material";
import {RouterModule} from "@angular/router";
import {LayoutComponent, NavItemComponent, SearchBarComponent, SidenavComponent, ToolbarComponent} from "./components";
import {FormsModule} from "@angular/forms";
import {NgxUiLoaderModule} from "ngx-ui-loader";


export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
  SearchBarComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    NgxUiLoaderModule,

  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class CoreModule {
}
