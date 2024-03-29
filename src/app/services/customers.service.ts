import { Injectable } from '@angular/core';
import {GetCustomers} from "../interfaces/getCustomers";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categories} from "../interfaces/categories";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customers!:GetCustomers[];

  constructor(private httpClient: HttpClient) { }

  /**
   *
   * Recuperation de tous les clients
   */
  getAllCustomers(): Observable<GetCustomers[]> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<GetCustomers[]>(environment.apiUrl + '/customers',{'headers':headers});
  }
}
