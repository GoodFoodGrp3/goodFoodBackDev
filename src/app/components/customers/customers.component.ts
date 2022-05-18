import { Component, OnInit } from '@angular/core';
import {GetCustomers} from "../../interfaces/getCustomers";
import {CustomersService} from "../../services/customers.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers!:GetCustomers[];

  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {

    this.getCustomers();
  }


  /**
   *
   * Recuperation des clients/customers
   */
  getCustomers(){
    this.customerService.getAllCustomers().subscribe(
      reponse => {
        this.customers = reponse;
      });
  }
}
