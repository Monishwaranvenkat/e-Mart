import { ConfirmDialogeComponent } from './../confirm-dialoge/confirm-dialoge.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmdialogService {

  constructor(private dialog:MatDialog) { }
  openDialog(){
    this.dialog.open(ConfirmDialogeComponent,{
      width: '500px',
      disableClose:true
    });
  }
}
