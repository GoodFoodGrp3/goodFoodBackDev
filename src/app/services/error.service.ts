import { Injectable } from '@angular/core';
import {ErrorLogs} from "../interfaces/errorLogs";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GetCustomers} from "../interfaces/getCustomers";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  errorLogs!:ErrorLogs[];

  constructor(private httpClient: HttpClient) { }

  /**
   *
   * Recuperation de tous les logs d'erreurs
   */
  getAllErrorLogs(): Observable<ErrorLogs[]> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<ErrorLogs[]>(environment.apiUrl + '/admin/errorLogs',{'headers':headers});
  }
}
