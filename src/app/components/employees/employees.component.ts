import { Component, OnInit } from '@angular/core';
import {RegisterEmployees} from "../../interfaces/registerEmployees";
import {EmployeesService} from "../../services/employees.service";
import {GetEmployees} from "../../interfaces/getEmployees";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees!:GetEmployees[];

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {

    this.getEmployees();
  }


  /**
   *
   * Recuperation des employees
   */
  getEmployees(){
    this.employeeService.getAllEmployees().subscribe(
      reponse => {
        this.employees = reponse;
      });
  }
}
