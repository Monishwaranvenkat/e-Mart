import { AuthgaurdService } from './../service/httpservices/authgaurd.service';
import { ViewinvoiceComponent } from './viewinvoice/viewinvoice.component';
import { UploadinvoiceComponent } from './uploadinvoice/uploadinvoice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MakerrootComponent } from './makerroot/makerroot.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
path:  'maker',
component:  MakerrootComponent,
canActivate: [AuthgaurdService],
data: { roles: ["ROLE_MAKER","ROLE_ADMIN"] },

children: [
  {
path:  '',
component:  DashboardComponent
},
 {
path:  'uploadinvoice',
component:  UploadinvoiceComponent
},
 {
path:  'viewinvoices',
component:  ViewinvoiceComponent
}

]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakerRoutingModule { }
