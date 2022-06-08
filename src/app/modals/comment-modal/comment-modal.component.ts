import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Comments} from "../../interfaces/comments";


@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss'],
})
export class CommentModalComponent implements OnInit {

  textareaForm = new FormGroup({
    content: new FormControl('', [Validators.required])
  });

  @Input() public comments!: Comments[];
  @Input() public idButton!:number;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();


  constructor(public activeModal: NgbActiveModal,) {


  }

  private commentCallBack!:string;

  ngOnInit(): void {

    this.comments.forEach((comment, index) => {
      if(comment.comment_id == this.idButton)
      {
        this.textareaForm.get('content')!.setValue(comment.content);
        this.commentCallBack = comment.content;
      }
    });
  }


  closeModal() {
    this.activeModal.close(this.commentCallBack);
    //window.location.reload();
  }


}
