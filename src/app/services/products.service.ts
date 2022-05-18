import { Injectable } from '@angular/core';
import {Products} from "../interfaces/products";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offices} from "../interfaces/offices";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products!:Products[];

  constructor(private httpClient: HttpClient) { }

  /**
   *
   * Recuperation de tous les produits
   */
  getAllProducts(): Observable<Products[]> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<Products[]>(environment.apiUrl + '/products',{'headers':headers});
  }
}
