import { Component, OnInit } from '@angular/core';
import {Products} from "../../interfaces/products";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!:Products[];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {

    this.getProducts();

  }


  /**
   *
   * Recuperation des produits
   */
  getProducts() {
    this.productsService.getAllProducts().subscribe(
      reponse => {
        this.products = reponse;
      });
  }
}
