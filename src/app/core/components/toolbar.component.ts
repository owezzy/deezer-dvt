import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="openMenu.emit()" aria-label="menu">
        <mat-icon>menu</mat-icon>
      </button>
      <ng-content></ng-content>
    </mat-toolbar>
  `,
  styles:[
    `
    .mat-toolbar{
      background: radial-gradient(circle at right top, #011441 , #10317f)
    }`

  ]
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
