
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './authService';

@Injectable()
export class RouterGuard implements CanActivate {
  role: string;


  constructor( private _router: Router,private authService: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAdmin) {
      return true;
    }
    this._router.navigate(['/']);
    return false;
    // you can save redirect url so after authing we can move them back to the page they requested
   
  }

}