import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate
{

  constructor(public login: LoginService, public router: Router) { }

  canActivate(){
    if(sessionStorage.getItem('token') != null && sessionStorage.getItem('token')!.length > 1)
    {
      return true;
    }
    this.router.navigateByUrl('/login');

    return false;

  }
}
