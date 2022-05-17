import { Component, OnInit } from '@angular/core';
import {Commodity} from "../../interfaces/commodity";
import {CommoditiesService} from "../../services/commodities.service";

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.scss']
})
export class CommoditiesComponent implements OnInit {

  commodities!:Commodity[];

  constructor(private commodityService: CommoditiesService) { }

  ngOnInit(): void {

    this.getCommoditys();
  }


  /**
   *
   * Recuperation des matières premières
   */
  getCommoditys(){
    this.commodityService.getAllCommodities().subscribe(
      reponse => {
        this.commodities = reponse;
      });
  }
}
