import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-artist',
  template: `
    <mat-card>
      <mat-card-title>Search For an Artist</mat-card-title>
      <mat-card-content>
        <mat-form-field>
          <input
            matInput
            placeholder="Search for an Artists"
            [value]="query"
            (keyup)="onSearch($event)"
          />
        </mat-form-field>
        <mat-spinner
          [class.show]="searching"
          [diameter]="30"
          [strokeWidth]="3"
        ></mat-spinner>
      </mat-card-content>
      <mat-card-footer
      ><span *ngIf="error">{{ error }}</span></mat-card-footer
      >
    </mat-card>
  `,
  styles: [
    `      mat-card-title,
      mat-card-content,
      mat-card-footer {
        display: flex;
        justify-content: center;
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
