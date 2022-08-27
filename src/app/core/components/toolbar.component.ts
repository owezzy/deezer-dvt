import {Component, Output, EventEmitter, ViewChild, ElementRef, Input, SimpleChanges, OnChanges} from '@angular/core';
import {SearchArtistPageActions} from "../../artists/actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-toolbar',
  template: `

    <mat-toolbar class="main-header mat-elevation-z4">
      <mat-toolbar-row fxLayoutAlign="space-between center" >
        <button mat-icon-button  aria-label="menu" >
          <mat-icon (click)="openMenu.emit($event)" color="accent">menu</mat-icon>

        </button>
       <div fxLayout="row" fxLayoutAlign="space-between center">

          <ng-content></ng-content>
         <mat-icon class="site_logo" svgIcon="deezer"></mat-icon>
       </div>

      </mat-toolbar-row>
    </mat-toolbar>


  `,
  styles:[
    `
    .mat-toolbar {
      background-color: #242328;
      color: #4c4e54;
    }
    .site_logo {
      width: 44px;
      height: 44px;
      transform: scale(2);
      padding-right: 21px;
    }

    header{
      position: fixed;
      top: 0;
      z-index: 2;
      transition: all 250ms ease-in-out;
    }
    .main-header{
      @extend header;
      &.hidden{
        opacity: 0;
      }
    }
    .search-block{
      width: 0%;
      right: 0;
      @extend header;
      background: #fff;
      &.active{
        width: 100%;
      }
      .search-control{
        flex: 1;
        font-size: 1rem;
        border: 0;
        outline: none;
        padding-left: 10px;
      }
    }
   `

  ]
})
export class ToolbarComponent implements OnChanges {
  constructor(    private store: Store
  ) {
  }
  @Output() openMenu = new EventEmitter();

  @Input() query = '';






  ngOnChanges(changes: SimpleChanges): void {
    if (changes){
      console.log(changes)
    }
  }
}
