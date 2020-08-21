import { OutflowcheckerModule } from './outflowchecker/outflowchecker.module';
import { CheckerModule } from './checker/checker.module';
import { ErrorInterceptService } from './service/httpservices/error-intercept.service';
import { MakerModule } from './maker/maker.module';
import { BasicAuthHtppInterceptorService } from './service/httpservices/basic-auth-htpp-interceptor.service';
import { AdduserComponent } from './admin/adduser/adduser.component';
import { MatDialog } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input'
import {MatDialogModule} from '@angular/material/dialog'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {AdminModule} from './admin/admin.module'
import{Mod2Module}from './mod2/mod2.module'
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    MatDialogModule,
    MatNativeDateModule,
    AdminModule,
    Mod2Module,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
     MatMenuModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MakerModule,
    CheckerModule,
    OutflowcheckerModule
  ],
  providers: [   { provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true},
     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptService, multi: true }
],
  bootstrap: [AppComponent],

})
export class AppModule { }
