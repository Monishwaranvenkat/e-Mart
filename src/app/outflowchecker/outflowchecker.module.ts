import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from './../material-design/material-design.module';


import { OutflowcheckerRoutingModule } from './outflowchecker-routing.module';
import { OutFlowCheckerDashboardComponent } from './out-flow-checker-dashboard/out-flow-checker-dashboard.component';
import { OutFlowCheckerrootComponent } from './out-flow-checkerroot/out-flow-checkerroot.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [OutFlowCheckerDashboardComponent, OutFlowCheckerrootComponent, CheckoutComponent],
  imports: [
    MaterialDesignModule,
    CommonModule,
    OutflowcheckerRoutingModule
  ]
})
export class OutflowcheckerModule { }
