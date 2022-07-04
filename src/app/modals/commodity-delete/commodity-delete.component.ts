import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Comments} from "../../interfaces/comments";
import {Commodity} from "../../interfaces/commodity";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-commodity-delete',
  templateUrl: './commodity-delete.component.html',
  styleUrls: ['./commodity-delete.component.scss']
})
export class CommodityDeleteComponent implements OnInit {

  inputForm = new FormGroup({
    content: new FormControl('', [Validators.required])
  });

  @Input() public commodities!: Commodity[];
  @Input() public idButton!:number;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  private deleteCommodityCallBack!:string;

  ngOnInit(): void {

    this.commodities.forEach((commodity, index) => {
      if(commodity.commodity_id == this.idButton)
      {
        this.inputForm.get('content')!.setValue(commodity.commodity_id);
        //this.deleteCommentCallBack = this.inputForm.get('content')?.value;
      }
    });

  }

  closeModal() {
    this.activeModal.dismiss();
  }

  validateModal(){
    this.deleteCommodityCallBack = this.inputForm.get('content')?.value;
    this.activeModal.close(this.deleteCommodityCallBack);
  }


}
