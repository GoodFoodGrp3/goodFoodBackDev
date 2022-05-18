import { Injectable } from '@angular/core';
import {RegisterEmployees} from "../interfaces/registerEmployees";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }



  /**
   *
   * Ajout Utilisateur
   */
  addOneUser(employee: RegisterEmployees)
  {
    const body=JSON.stringify(employee);
    const headers = { 'content-type': 'application/json'}
    return this.httpClient.post<any>(environment.apiUrl + '/employees/register', body,{'headers':headers} );

  }
}
