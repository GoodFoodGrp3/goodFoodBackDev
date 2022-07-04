import { Component, OnInit } from '@angular/core';
import {Commodity} from "../../interfaces/commodity";
import {CommoditiesService} from "../../services/commodities.service";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CommentDeleteComponent} from "../../modals/comment-delete/comment-delete.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CommodityDeleteComponent} from "../../modals/commodity-delete/commodity-delete.component";

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.scss']
})
export class CommoditiesComponent implements OnInit {

  commodities!:Commodity[];

  constructor(private commodityService: CommoditiesService,
              private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getCommoditys();
  }

  openDeleteModal(commodityId:number) {
    const modalRef = this.modalService.open(CommodityDeleteComponent,
      {
        backdrop: false,
        //scrollable: true,
        //windowClass: 'myCustomModalClass',
        centered : true,
        keyboard: false,

      });

    modalRef.componentInstance.idButton = commodityId;
    modalRef.componentInstance.commodities = this.commodities;

    modalRef.result.then((commodityCallBack) => {
      if (commodityCallBack != null)
      {
        //this.commentCallBack = commentCallBack;
        this.deleteCommodity(commodityId);
      }
    });
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

  /**
   *
   * Suppression d'un commentaire
   */
  deleteCommodity(idCommodity:number) {
    this.commodityService.deleteCommodity(idCommodity).subscribe({
      next: data => {
        window.location.reload();
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }
}
