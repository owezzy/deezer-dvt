import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatDrawerMode} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidenav',
  template: `
    <mat-sidenav
      #sidenav
      [opened]="open"
      [mode]="mode.value"
      (keydown.escape)="sidenav.close()"
      (closedStart)="closeMenu.emit()"
    >
      <mat-nav-list>
        <ng-content></ng-content>
      </mat-nav-list>
    </mat-sidenav>
  `,
  styles: [
    `
    `,
  ],
})
export class SidenavComponent {
  @Input() open = false;
  @Output() closeMenu = new EventEmitter();
  @Input() mode = new FormControl('side' as MatDrawerMode);
}
