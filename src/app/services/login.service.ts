import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login';
import {environment} from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {GetEmployees} from "../interfaces/getEmployees";

@Injectable({
  providedIn: 'root'
})
export class LoginService
{
  /**
   *
   * Listes Utilisateurs
   */

  login!: Login[];

  constructor(
    private httpClient: HttpClient,
    private router : Router
  ) { }


  /**
   *
   * Connexion Utilisateur
   */
  CheckUser(data: any)
  {
    const body=JSON.stringify(data);
    const headers = { 'content-type': 'application/json'}
    return this.httpClient.post<any>(environment.apiUrl + '/authenticate', body,{'headers':headers} );
  }

  /**
   *
   * Recuperation de tous les membres
   */
  getAllMembers(): Observable<Login[]> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<Login[]>(environment.apiUrl + '/employees',{'headers':headers});
  }

}
