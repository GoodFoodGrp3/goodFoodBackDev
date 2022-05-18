import { Component, OnInit } from '@angular/core';
import {Offices} from "../../interfaces/offices";
import {OfficesService} from "../../services/offices.service";

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {

  offices!:Offices[];

  constructor(private officesService:OfficesService) { }

  ngOnInit(): void {


    this.getOffices();
  }


  /**
   *
   * Recuperation des offices
   */
  getOffices(){
    this.officesService.getAllOffices().subscribe(
      reponse => {
        this.offices = reponse;
      });
  }

}
