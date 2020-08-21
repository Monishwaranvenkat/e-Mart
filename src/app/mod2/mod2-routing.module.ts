import { AddinvoiceComponent } from './addinvoice/addinvoice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
path:  'mak',
component:  AddinvoiceComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod2RoutingModule { }
