import { AuthenticationServiceService } from 'src/app/authentication-service.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

  constructor(private router: Router,private authenticationService:AuthenticationServiceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {


    const currentUser = this.authenticationService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.jwt;
        if (isLoggedIn) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.jwt}`
                }
            });
        }

        return next.handle(request);

  }
}
