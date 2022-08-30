import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(    private snackBar: MatSnackBar,
  ) { }

  showToast(message: string, action = 'Close', config?: MatSnackBarConfig) {
    this.snackBar.open(
      message,
      action,
      config || {
        politeness: 'polite',
        duration: 10000,
        verticalPosition: 'top',
      }
    );
  }
}
