import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import {Categories} from "../interfaces/categories";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories!:Categories[];

  constructor(private httpClient: HttpClient) { }

  /**
   *
   * Recuperation de toutes les categories
   */
  getAllCategories(): Observable<Categories[]> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<Categories[]>(environment.apiUrl + '/categories',{'headers':headers});
  }
}
