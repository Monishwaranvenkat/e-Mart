import { ViewinvoiceComponent } from './../maker/viewinvoice/viewinvoice.component';
import { UploadinvoiceComponent } from './../maker/uploadinvoice/uploadinvoice.component';
import { AuthgaurdService } from './../service/httpservices/authgaurd.service';
import { ViewsupplierComponent } from './viewsupplier/viewsupplier.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { ListuserComponent } from './listuser/listuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
path:  'admin',
component:  AdminhomeComponent,
canActivate: [AuthgaurdService],
data: { roles: ["ROLE_ADMIN"] },
children: [
  {
path:  '',
component:  AdduserComponent
}
  ,
{
path:  'adduser',
component:  AdduserComponent
},
{
path:  'getuser',
component:  ListuserComponent
},
{
path:  'addsupplier',
component:  AddsupplierComponent
},
{
path:  'viewsupplier',
component:  ViewsupplierComponent
},
{
  path:'uploadinvoice',
  component:UploadinvoiceComponent
},
{
  path:'viewinvoice',
  component:ViewinvoiceComponent
}
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
