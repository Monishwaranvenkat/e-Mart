import { AuthenticationServiceService } from 'src/app/authentication-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate {

  constructor(private router: Router,
    private authenticationService: AuthenticationServiceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                // role not authorised so redirect to home page
                alert(" You are not allowed to access the page ")
                this.router.navigate(['/']);
                return false;
            }

            // authorised so return true
            return true;
        }
    this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
