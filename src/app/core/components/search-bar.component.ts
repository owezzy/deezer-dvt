import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SearchArtistPageActions} from "../../artists/actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-search-bar',
  template: `
<!--    <div fxLayout="row" fxLayoutAlign="center center" class="searchbar-container">-->
<!--      <mat-icon color="accent" prefix>search</mat-icon>-->
<!--      <mat-form-field color="accent" appearance="outline"-->
<!--      >-->
<!--        <input matInput-->
<!--               [value]="query"-->
<!--               (keyup)="onSearch($event)"-->
<!--               class="search-control" type="text" #searchbar/>-->
<!--      </mat-form-field>-->
<!--    </div>-->

<div class="search-wrapper" fxLayout="row" [ngClass]="{ 'focus': focused, 'has-input': input }" fxFlex>
  <mat-icon class="search-icon">search</mat-icon>
  <input type="search"
         autocomplete="off"
         spellcheck="false"
         class="search-input"
         [value]="query"
         (keyup)="onSearch($event)"
         placeholder="Search...">
  <mat-card-footer
  ><mat-error *ngIf="error">{{ error }}</mat-error></mat-card-footer>
</div>

  `,
  styles: [

`
      $height: 33px;

      :host {
        display: block;
        width: 100%;
      }

      input[type="search"] {
        -webkit-appearance: none;
      }

      .search-wrapper {
        position: relative;
        width: 60%;

        .search-icon {
          position: absolute;
          font-size: 24px;
          line-height: $height;
          left: 3px;
          transition: color 0.2s ease;
        }

        .search-input {
          display: block;
          padding: 8px 8px 8px 33px;
          height: $height;
          transition: all 0.2s ease;
          border: none;
          font-size: 16px;
          font-weight: 300;
          outline: none;
          border-radius: 8px;
          box-sizing: border-box;
          width: 60%;

          &::-webkit-input-placeholder {
            font-weight: 500;
            color: currentColor;
          }

          &:-moz-placeholder {
            font-weight: 500;
            opacity: 1;
            color: currentColor;
          }

          &::-moz-placeholder {
            font-weight: 500;
            opacity: 1;
            color: currentColor;
          }

          &:-ms-input-placeholder {
            font-weight: 500;
            color: currentColor;
          }

          &::placeholder {
            font-weight: 500;
            color: currentColor;
          }
        }

        &.focus {
          .search-dropdown {
            transform: translateY(0);
            visibility: visible;
          }
        }


    }

    .mat-form-field {
      color: #ffd740;
      line-height: 24px;
      border-radius: 13px;

    }



    `]
})
export class SearchBarComponent {
  @Input() query = '';
  @Input() searching = false;
  @Input() error = '';
  @Output() search = new EventEmitter<string>();


  input: string;
  focused: boolean;

  onSearch(data: KeyboardEvent) {
    this.search.emit((data.target as HTMLInputElement).value);
  }


}
