import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../services/employees.service";
import {GetEmployees} from "../../interfaces/getEmployees";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  userConnected!: GetEmployees;

  constructor(private employeeService: EmployeesService) { }

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

}
