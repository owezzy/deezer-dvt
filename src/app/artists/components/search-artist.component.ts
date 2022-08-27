import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-artist',
  template: `
    <app-search-bar></app-search-bar>

    <mat-card >
      <mat-card-title>Browse Deezer Artists</mat-card-title>
      <mat-card-content>
        <div fxLayout="row" fxLayoutAlign="center center">
        <mat-icon color="accent" prefix>search</mat-icon>
        <mat-form-field color="accent">
          <input
            matInput
            [value]="query"
            (keyup)="onSearch($event)"
          />
        </mat-form-field>
<!--        <mat-spinner-->
<!--          [class.show]="searching"-->
<!--          [diameter]="30"-->
<!--          [strokeWidth]="3"-->
<!--        ></mat-spinner>-->
        </div>

      </mat-card-content>
      <mat-card-footer
      ><span *ngIf="error">{{ error }}</span></mat-card-footer
      >

    </mat-card>
  `,
  styles: [
    `
      mat-card {
        padding: 13px;
        background-color: #4c4e54;
        color: #4c4e54;
        //background: radial-gradient(circle at bottom, #24417b , #24e5dc)

      }

      mat-card-title,
      mat-card-content,
      mat-card-footer
      {
        display: flex;
        justify-content: center;
        color: #ffd740;
      }

      .mat-form-field-appearance-legacy .mat-form-field-infix {
        padding: 0.4375em 0;
        color: aqua;
      }

      mat-card-footer {
        color: #ff0000;
        padding: 5px 0;
      }

      .mat-form-field {
        min-width: 300px;
        margin-right: 10px;
      }

      .mat-spinner {
        position: relative;
        top: 10px;
        left: 10px;
        visibility: hidden;
      }

      .mat-spinner.show {
        visibility: visible;
      }

    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchArtistComponent {
  @Input() query = '';
  @Input() searching = false;
  @Input() error = '';
  @Output() search = new EventEmitter<string>();

  onSearch(event: KeyboardEvent): void {
    this.search.emit((event.target as HTMLInputElement).value);
  }
}
