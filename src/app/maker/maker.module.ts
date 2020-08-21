import { MaterialDesignModule } from './../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakerRoutingModule } from './maker-routing.module';
import { MakerrootComponent } from './makerroot/makerroot.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadinvoiceComponent } from './uploadinvoice/uploadinvoice.component';
import { ViewinvoiceComponent } from './viewinvoice/viewinvoice.component';

//material
@NgModule({
  declarations: [ MakerrootComponent, DashboardComponent, UploadinvoiceComponent, ViewinvoiceComponent],
  imports: [
   MaterialDesignModule,
    CommonModule,
    MakerRoutingModule
  ]
})
export class MakerModule { }
