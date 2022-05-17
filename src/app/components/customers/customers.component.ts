import { Component, OnInit } from '@angular/core';
import {Customers} from "../../interfaces/customers";
import {CustomersService} from "../../services/customers.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers!:Customers[];

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
