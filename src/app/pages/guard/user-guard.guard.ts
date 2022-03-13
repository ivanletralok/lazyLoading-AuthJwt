import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cookie =  this.cookieService.check('token')
      if(!cookie) {
        console.log('no access')
        this.router.navigate(['/auth/login'])
      } else {
        return true;
      }
      return false;
  }
}
