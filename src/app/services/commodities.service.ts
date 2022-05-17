import { Injectable } from '@angular/core';
import {Commodity} from "../interfaces/commodity";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categories} from "../interfaces/categories";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommoditiesService {

  commodities!:Commodity[];

  constructor(private httpClient: HttpClient) { }


  /**
   *
   * Recuperation de toutes les matières premières
   */
  getAllCommodities(): Observable<Commodity[]> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<Commodity[]>(environment.apiUrl + '/commoditys',{'headers':headers});
  }
}
