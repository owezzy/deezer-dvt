import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SearchArtistPageActions} from "../../artists/actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-search-bar',
  template: `
    <div fxLayout="row" fxLayoutAlign="center center" class="searchbar-container">
      <mat-icon color="accent" prefix>search</mat-icon>
      <mat-form-field color="accent">
        <input matInput
               placeholder="Search Deezer Artists"
               [value]="query"
               (keyup)="onSearch($event)"
               class="search-control" type="text" #searchbar/>
      </mat-form-field>
    </div>

  `,
  styles: [
    `:host ::ng-deep .mat-form-field .mat-form-field-appearance-legacy .mat-form-field-label{
      color: #ffd740;
    }

    .mat-form-field {
      color: #ffd740;
    }
    `]
})
export class SearchBarComponent {
  @ViewChild('searchbar') searchbar:ElementRef;
  @Input() query = '';
  @Input() searching = false;
  @Input() error = '';
  @Output() search = new EventEmitter<string>();


  onSearch(data: KeyboardEvent) {
    this.search.emit((data.target as HTMLInputElement).value);
  }



}
