import { Injectable } from '@angular/core';
import {Providers} from "../interfaces/providers";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  providers!:Providers[];

  constructor(private httpClient: HttpClient) { }

  /**
   *
   * Recuperation de tous les fournisseurs
   */
  getAllProviders(): Observable<Providers[]> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<Providers[]>(environment.apiUrl + '/providers',{'headers':headers});
  }
}
