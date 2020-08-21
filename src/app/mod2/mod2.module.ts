import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod2RoutingModule } from './mod2-routing.module';
import { AddinvoiceComponent } from './addinvoice/addinvoice.component';
//material design
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule}  from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list' ;
import { MatButtonModule } from  '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [AddinvoiceComponent],
  imports: [
    MatSlideToggleModule,
     MatSortModule,
    MatProgressBarModule,
     MatSelectModule,
    MatDatepickerModule,
     MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    Mod2RoutingModule
  ]
})
export class Mod2Module { }
