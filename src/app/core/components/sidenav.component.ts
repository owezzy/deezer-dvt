import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatDrawerMode} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidenav',
  template: `
    <mat-sidenav
      #sidenav
      [opened]="open"
      mode="side"
      (keydown.escape)="closeMenu.emit()"
      (closedStart)="closeMenu.emit()"
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
        margin-top: 64px;
      }

      @media screen and (max-width: 600px) {
        mat-sidenav{
        margin-top: 56px
      }
      }

    `,
  ],
})
export class SidenavComponent {

  @Input() open = true;
  @Output() closeMenu = new EventEmitter();
  @Input() mode = new FormControl('side' as MatDrawerMode);


}
