import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Comments} from "../../interfaces/comments";
import {Commodity} from "../../interfaces/commodity";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-commodity-modify',
  templateUrl: './commodity-modify.component.html',
  styleUrls: ['./commodity-modify.component.scss']
})
export class CommodityModifyComponent implements OnInit {

  textareaForm = new FormGroup({
    buyPrice: new FormControl('', [Validators.required]),
    commodityName: new FormControl('', [Validators.required]),
    providerId: new FormControl('', [Validators.required]),
    commodityDescription: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    unit: new FormControl('', [Validators.required]),
    vendorProvider: new FormControl('', [Validators.required]),
  });

  @Input() public commodities!: Commodity[];
  @Input() public idButton!:number;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  private idcommodities!:number;

  constructor(public activeModal: NgbActiveModal) { }

  private commodityCallBack!:string;

  ngOnInit(): void {

    this.commodities.forEach((commodity, index) => {

      if(commodity.commodity_id == this.idButton)
      {
        this.idcommodities = commodity.commodity_id;
        this.textareaForm.get('buyPrice')!.setValue(commodity.buy_price);
        this.textareaForm.get('commodityName')!.setValue(commodity.commodity_name);
        this.textareaForm.get('commodityDescription')!.setValue(commodity.commodity_description);
        this.textareaForm.get('providerId')!.setValue(commodity.provider.provider_id);
        this.textareaForm.get('quantity')!.setValue(commodity.quantity);
        this.textareaForm.get('quantity')!.setValue(commodity.taxe);
        this.textareaForm.get('unit')!.setValue(commodity.unit);
        //this.commentCallBack = this.textareaForm.get('content')?.value + comment.comment_id;
      }
    });

  }

  closeModal() {
    this.activeModal.dismiss();
    //window.location.reload();
  }

  validateModal(){

    this.commodityCallBack = this.textareaForm.get('buyPrice')?.value + ',' +
      this.textareaForm.get('commodityName')?.value + ',' +
      //this.textareaForm.get('providerId')?.value + ',' +
      this.textareaForm.get('commodityDescription')?.value + ',' +
      this.textareaForm.get('quantity')?.value + ',' +
      this.textareaForm.get('unit')?.value + ',' + this.textareaForm.get('vendorProvider')?.value + ',' +
      this.idcommodities ;

    this.activeModal.close(this.commodityCallBack);
  }

}
