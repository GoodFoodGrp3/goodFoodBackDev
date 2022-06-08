import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterEmployees} from "../interfaces/registerEmployees";
import {Observable} from "rxjs";
import {Categories} from "../interfaces/categories";
import {environment} from "../../environments/environment";
import {GetEmployees} from "../interfaces/getEmployees";
import {Router} from "@angular/router";
import {UpdateEmployee} from "../interfaces/updateEmployee";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees!:GetEmployees[];

  constructor(private httpClient: HttpClient, private router:Router) { }

  /**
   *
   * Recuperation de tous les employees
   */
  getAllEmployees(): Observable<GetEmployees[]> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<GetEmployees[]>(environment.apiUrl + '/employees',{'headers':headers});
  }

  /**
   *
   * Recuperation utilisateur actuel/connecté
   */
  CheckUserToken(token: string): Observable<GetEmployees> {
    const headers = { 'Authorization': 'Bearer ' + token}
    return this.httpClient.get<GetEmployees>(environment.apiUrl + '/employees/current',{'headers':headers});
  }

  /**
   *
   * Recuperation utilisateur par son id
   */
  getOneUser(id : number) : Observable<GetEmployees> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<GetEmployees>(environment.apiUrl + '/employees/' + id,{'headers':headers});
  }


  /**
   *
   * Modification Employee
   */
  updateEmployeeById(employee: UpdateEmployee, id : number) {
    const body=JSON.stringify(employee);
    const headers = { 'content-type': 'application/json','Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    this.httpClient.put<any>(environment.apiUrl + '/employees/profile/' + id, body,{'headers':headers} ).subscribe({
      next: data => {
        console.log("update successful");
        window.location.reload();
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });

  }

}
