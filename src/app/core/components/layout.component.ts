import {Component, ViewEncapsulation} from '@angular/core';
import {routeAnimations} from "../../../shared/animations/route.animations";

@Component({
  selector: 'app-layout',
  template: `
    <mat-drawer-container  [@routeAnimations]="
        outlet && outlet.isActivated && outlet.activatedRouteData" fullscreen>
      <mat-drawer-content>
        <ng-content></ng-content>
      <router-outlet #outlet="outlet"></router-outlet>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [
    `
      :host ::ng-deep  {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;


      }

    `,
  ],
  animations: [routeAnimations],
  encapsulation: ViewEncapsulation.Emulated


})
export class LayoutComponent {}
