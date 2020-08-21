import { AuthenticationServiceService } from 'src/app/authentication-service.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptService implements HttpInterceptor{

  constructor(private authenticationService: AuthenticationServiceService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
       catchError((error: HttpErrorResponse) => {
         let errorMessage = '';
         if (error.error instanceof ErrorEvent) {
           // client-side error
           errorMessage = "Server unreacheable";
            window.alert(errorMessage);
            this.authenticationService.logout();
            location.reload(true);
            return throwError("client side error");
         } else {
           // server-side error
           if(error.status==0)
           {
              errorMessage = "Server unreacheable";
               window.alert(errorMessage);
                this.authenticationService.logout();
               location.reload(true);
               return throwError("server side error side error");
           }
           if ([401, 403].indexOf(error.status) !== -1) {
            
              errorMessage = error.error.message;
              window.alert(errorMessage);
              this.authenticationService.logout();
               location.reload(true);
               return throwError("Server side error");
            }
             if(error.status==400)
             {
                
               errorMessage = error.error.message;
              window.alert(errorMessage);
              location.reload(true);
              return throwError("Data incorrect");
             }  
         }
        return throwError(error);
       })
     )
    }
}


