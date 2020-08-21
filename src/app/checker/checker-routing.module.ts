import { AuditInvoiceComponent } from './audit-invoice/audit-invoice.component';
import { ListinvoiceComponent } from './listinvoice/listinvoice.component';
import { CheckerdashboardComponent } from './checkerdashboard/checkerdashboard.component';
import { CheckerrootComponent } from './checkerroot/checkerroot.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthgaurdService } from '../service/httpservices/authgaurd.service';

const routes: Routes = [
  {
path:  'checker',
component:  CheckerrootComponent,
canActivate: [AuthgaurdService],
data: { roles: ["ROLE_MAKER","ROLE_ADMIN"] },

children: [
  {
path:  '',
component:  CheckerdashboardComponent
  },
  {
path:  'incominginvoice',
component:  ListinvoiceComponent
},
{
path:  'auditinvoice',
component:  AuditInvoiceComponent
},

]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckerRoutingModule { }
