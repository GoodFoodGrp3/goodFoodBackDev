import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Categories} from "../../interfaces/categories";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  display = false;


  categories!:Categories[];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {

    this.getCategories();
  }

  onPress() {
    //this.display = true;

    //To toggle the component
    this.display = !this.display;
  }

  /**
   *
   * Recuperation des categories
   */
  getCategories(){
    this.categoriesService.getAllCategories().subscribe(
      reponse => {
        this.categories = reponse;
      });
  }
}
