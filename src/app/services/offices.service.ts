import { Injectable } from '@angular/core';
import {Offices} from "../interfaces/offices";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GetEmployees} from "../interfaces/getEmployees";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OfficesService {

  offices!:Offices[];

  constructor(private httpClient: HttpClient) { }


  /**
   *
   * Recuperation de tous les offices
   */
  getAllOffices(): Observable<Offices[]> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<Offices[]>(environment.apiUrl + '/offices',{'headers':headers});
  }

}
