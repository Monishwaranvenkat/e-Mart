import { MakerModule } from './../maker/maker.module';
import { MaterialDesignModule } from './../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdduserComponent } from './adduser/adduser.component';
//material design

import { ListuserComponent } from './listuser/listuser.component';

import { EdituserComponent } from './edituser/edituser.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { ViewsupplierComponent } from './viewsupplier/viewsupplier.component';



@NgModule({
  declarations: [AdminhomeComponent, AdduserComponent, ListuserComponent, EdituserComponent, AddsupplierComponent, ViewsupplierComponent],
  imports: [
    MakerModule,
    MaterialDesignModule,  
    CommonModule,
    AdminRoutingModule,
   
  ]
})
export class AdminModule { }
