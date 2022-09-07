import { Injectable } from '@angular/core';
import {Commodity} from "../interfaces/commodity";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categories} from "../interfaces/categories";
import {environment} from "../../environments/environment";
import {UpdateComment} from "../interfaces/updateComment";
import {UpdateCommodity} from "../interfaces/updateCommodity";

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


  /**
   *
   * Modification d'une matière première
   */
 /* updateCommodity(id : number,buyPrice : number, commodityName: string, commodityDescription : string,providerId:number,quantity:number,taxeId:number,unit:number){
    const body=JSON;
    const headers = { 'content-type': 'application/json','Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.put<UpdateCommodity>(environment.apiUrl + '/commoditys/' + id +'?buy_price=' + buyPrice +'?commodity_name=' + commodityName +  '?commodity_description' + commodityDescription + '?provider_id=' + providerId + '?quantity=' + quantity + '?taxe_id' + taxeId + '?unit=' + unit ,body,{'headers':headers} );
  }*/

  /**
   *
   * Suppression d'une matière première
   */
  deleteCommodity(id:number){
    const headers = {'Authorization': 'Bearer ' + sessionStorage.getItem('token')};
    return this.httpClient.delete<any>(environment.apiUrl + '/commoditys/' + id,{'headers':headers});
  }
}
