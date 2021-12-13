import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UIInfo } from '../models/ui-info.model';
import { ConfirmationDialog } from '../models/confirmation-dialog.model';
import { ConfirmDialogComponent } from '../components/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class CommonService {
  private _defaultData: UIInfo = {
    title: '',
    formId: '',
    goBackPath: '/',
    refreshPath: '/',
  };

  private _dataSource$ = new BehaviorSubject<UIInfo>(this._defaultData);
  private _serviceModalData$ = new BehaviorSubject<any>({});

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}

  get uiInfo(): Observable<UIInfo> {
    return this._dataSource$.asObservable();
  }

  setUiInfo(info: UIInfo): void {
    this._dataSource$.next(info);
  }

  showSuccessMsg(msg: string, duration = 10000): void {
    const bot = this.snackBar.open(msg, '❎', {
      duration: duration,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['snackbar-container', 'success'],
    });
    bot.onAction().subscribe(() => {
      bot.dismiss();
    });
  }

  showErrorMsg(msg: string, duration = 10000): void {
    const bot = this.snackBar.open(msg, '❌', {
      duration: duration,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['snackbar-container', 'danger'],
    });
    bot.onAction().subscribe(() => {
      bot.dismiss();
    });
  }

  showDialog(data: ConfirmationDialog, callback: Function): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: true,
      minWidth: '550px',
      data,
    });
    dialogRef.afterClosed().subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {
        if (callback) {
          callback();
        }
      }
    });
  }

  removeEmptyProperties = (obj: any) => {
    for (const prop in obj) {
      if (obj[prop] === null || obj[prop] === undefined || obj[prop] === '') {
        delete obj[prop];
      }
    }
  };
}
