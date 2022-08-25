import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotFoundPageComponent} from "./containers/not-found-page.component";
import {AppComponent} from "./containers/app.component";
import {MaterialModule} from "../material";
import {RouterModule} from "@angular/router";
import {LayoutComponent, NavItemComponent, SidenavComponent, ToolbarComponent} from "./components";


export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class CoreModule { }
