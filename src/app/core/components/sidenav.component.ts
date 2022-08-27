import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatDrawerMode} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidenav',
  template: `
    <mat-sidenav
      #sidenav
      [opened]="open"
      [mode]="mode.value"
      (keydown.escape)="closeMenu.emit()"
      (closedStart)="closeMenu.emit()"
      [disableClose]="false"
    >
      <mat-nav-list>
        <ng-content></ng-content>
      </mat-nav-list>
    </mat-sidenav>
  `,
  styles: [
    `
      mat-sidenav {
        width: 200px;
        color: #4c4e54;
      }
    `,
  ],
})
export class SidenavComponent {

  @Input() open = true;
  @Output() closeMenu = new EventEmitter();
  @Input() mode = new FormControl('side' as MatDrawerMode);


}
