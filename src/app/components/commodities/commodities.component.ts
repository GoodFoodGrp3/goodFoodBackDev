import { Component, OnInit } from '@angular/core';
import {Commodity} from "../../interfaces/commodity";
import {CommoditiesService} from "../../services/commodities.service";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CommentDeleteComponent} from "../../modals/comment-delete/comment-delete.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CommodityDeleteComponent} from "../../modals/commodity-delete/commodity-delete.component";
import {CommentModalComponent} from "../../modals/comment-modal/comment-modal.component";
import {CommodityModifyComponent} from "../../modals/commodity-modify/commodity-modify.component";

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.scss']
})
export class CommoditiesComponent implements OnInit {

  commodities!:Commodity[];
  myArray!: Array<string>;

  constructor(private commodityService: CommoditiesService,
              private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getCommoditys();
  }

  openModal(id:number) {
    const modalRef = this.modalService.open(CommodityModifyComponent,
      {
        backdrop: false,
        scrollable: false,
        //windowClass: 'myCustomModalClass',
        centered : true,
        keyboard: false,

      });

    modalRef.componentInstance.idButton = id;
    modalRef.componentInstance.commodities = this.commodities;

    modalRef.result.then((commodityCallBack) => {
      if (commodityCallBack != null)
      {
        this.myArray = commodityCallBack.split(",").filter(Boolean);
        //this.updateCommoditysById(Number(this.myArray[6]),Number(this.myArray[0]),this.myArray[1],f,Number(this.myArray[3]),Number(this.myArray[4]),this.myArray[5]);
      }
    });
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
   * Mise à jour commoditys
   */
/*  updateCommoditysById(id:number,buyPrice:number,commodityName:string,providerId:number,quantity:number,unit:number,vendorProvider:string){
    this.commodityService.updateCommodity(id,buyPrice,commodityName,providerId,quantity,unit,vendorProvider).subscribe({
      next: data => {
        window.location.reload();
        //spinner ?
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });;
  }*/

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
