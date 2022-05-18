import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterEmployees} from "../interfaces/registerEmployees";
import {Observable} from "rxjs";
import {Categories} from "../interfaces/categories";
import {environment} from "../../environments/environment";
import {GetEmployees} from "../interfaces/getEmployees";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees!:GetEmployees[];

  constructor(private httpClient: HttpClient) { }

  /**
   *
   * Recuperation de tous les employees
   */
  getAllEmployees(): Observable<GetEmployees[]> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<GetEmployees[]>(environment.apiUrl + '/employees',{'headers':headers});
  }
}
