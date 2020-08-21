import { MaterialDesignModule } from './../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckerRoutingModule } from './checker-routing.module';
import { CheckerdashboardComponent } from './checkerdashboard/checkerdashboard.component';
import { CheckerrootComponent } from './checkerroot/checkerroot.component';
import { ListinvoiceComponent } from './listinvoice/listinvoice.component';
import { AuditInvoiceComponent } from './audit-invoice/audit-invoice.component';


@NgModule({
  declarations: [CheckerdashboardComponent, CheckerrootComponent, ListinvoiceComponent, AuditInvoiceComponent],
  imports: [
    CommonModule,
    CheckerRoutingModule,
    MaterialDesignModule
  ]
})
export class CheckerModule { }
