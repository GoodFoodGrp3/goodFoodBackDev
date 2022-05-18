import { Component, OnInit } from '@angular/core';
import {Orders} from "../../interfaces/orders";
import {OrdersService} from "../../services/orders.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders!:Orders[];

  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {

    this.getOrders();

  }

  /**
   *
   * Recuperation des orders
   */
  getOrders() {
    this.ordersService.getAllorders().subscribe(
      reponse => {
        this.orders = reponse;
      });
  }
}
