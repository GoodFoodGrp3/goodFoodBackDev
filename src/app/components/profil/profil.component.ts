import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../services/employees.service";
import {GetEmployees} from "../../interfaces/getEmployees";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  userConnected!: GetEmployees;

  Status: string[] = ['RESTAURATEUR', 'COMPTABLE', 'COMMUNITY', 'EMPLOYEE','ADMINISTRATEUR'];

  employeeForm!: FormGroup;

  errorForm = false;

  constructor(private employeeService: EmployeesService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('token'))
    {
      this.checkUsers(sessionStorage.getItem('token'));
      this.initUserForm();
    }

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
   * Initialisation des formulaire
   */
  initUserForm(){
    this.employeeForm = this.formBuilder.group({
      username: [''],
      lastname: [''],
      private_number: [''],
      email: ['']
    })
  }

  /**
   *
   * Update de l'employee
   */
  updateEmployee(){
        //this.employeeForm.get('username')! = ;
        //this.employeeForm.get('private_number')!.setValue(this.userConnected.private_number);
        //this.employeeForm.get('lastname')!.setValue(this.userConnected.lastname);
        //this.employeeForm.get('email')!.setValue(this.userConnected.email);

        this.employeeService.updateEmployeeById(this.userConnected,this.userConnected.id)
        //this.errorForm = false;
       // $('#changeUser').modal('hide');
  };


}
