import { CheckoutComponent } from './checkout/checkout.component';
import { OutFlowCheckerrootComponent } from './out-flow-checkerroot/out-flow-checkerroot.component';
import { OutFlowCheckerDashboardComponent } from './out-flow-checker-dashboard/out-flow-checker-dashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthgaurdService } from '../service/httpservices/authgaurd.service';

const routes: Routes = [
  {
    path:"out",
    component:OutFlowCheckerrootComponent,
    canActivate: [AuthgaurdService],
    data: { roles: ["ROLE_MAKER","ROLE_ADMIN"] },
    children:[
      {path:"",
      component:OutFlowCheckerDashboardComponent
     },
     {
       path:"checkout",
       component:CheckoutComponent
     }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutflowcheckerRoutingModule { }
