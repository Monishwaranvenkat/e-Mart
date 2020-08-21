import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
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
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';




@NgModule({
  declarations: [  ],
  imports: [
    MatStepperModule,
    MatTooltipModule,
     MatExpansionModule,
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
    CommonModule
  ],
  exports:[
    MatStepperModule,
       MatTooltipModule,
     MatExpansionModule,
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
  ]
})
export class MaterialDesignModule { }
