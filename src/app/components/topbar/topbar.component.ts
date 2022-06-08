import { Component, OnInit } from '@angular/core';
import {GetEmployees} from "../../interfaces/getEmployees";
import {EmployeesService} from "../../services/employees.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  userConnected!: GetEmployees;

  constructor( private employeeService: EmployeesService, private router:Router) { }

  ngOnInit(): void {

    this.checkUsers(sessionStorage.getItem('token'));

  }


  /**
   *
   * Recuperation donnée utilisateur
   */
  checkUsers(token : any){
    this.employeeService.CheckUserToken(token).subscribe(
      reponse => {
        this.getUser(reponse.id);
      });
  }

  /**
   *
   * Recuperation utilisateur connecté
   */
  getUser(id : number){
    this.employeeService.getOneUser(id).subscribe(
      reponse => {
        this.userConnected = reponse;
      });
  }

  /**
   *
   * Se déconnecter
   */
  logout(){
    sessionStorage.setItem('token','');
    window.location.reload();

  }

}
