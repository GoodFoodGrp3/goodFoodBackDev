import { Injectable } from '@angular/core';
import {Customers} from "../interfaces/customers";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categories} from "../interfaces/categories";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customers!:Customers[];

  constructor(private httpClient: HttpClient) { }

  /**
   *
   * Recuperation de tous les clients
   */
  getAllCustomers(): Observable<Customers[]> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<Customers[]>(environment.apiUrl + '/customers',{'headers':headers});
  }
}
