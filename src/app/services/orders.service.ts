import { Injectable } from '@angular/core';
import {Orders} from "../interfaces/orders";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offices} from "../interfaces/offices";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orders!:Orders[];

  constructor(private httpClient: HttpClient) { }

  /**
   *
   * Recuperation de tous les orders
   */
  getAllorders(): Observable<Orders[]> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<Orders[]>(environment.apiUrl + '/orders',{'headers':headers});
  }
}
