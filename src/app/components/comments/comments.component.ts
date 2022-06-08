import { Component, OnInit } from '@angular/core';
import {Comments} from "../../interfaces/comments";
import {CommentsService} from "../../services/comments.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { CommentModalComponent} from "../../modals/comment-modal/comment-modal.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments!:Comments[];
  idButton!: number;

  refreshPage = false;

  //commentForm: FormGroup;

  constructor(private commentsService:CommentsService,
              private commentService: CommentsService,
              private formBuilder: FormBuilder,
              private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getComments();
    //this.initCommentForm();
  }

  refresh(){
    this.ngOnInit();
    this.refreshPage = false;
  }


  openModal(id:number) {
    const modalRef = this.modalService.open(CommentModalComponent,
      {
        backdrop: false,
        //scrollable: true,
        //windowClass: 'myCustomModalClass',
        centered : true,
        keyboard: false,

      });

    modalRef.componentInstance.idButton = id;
    modalRef.componentInstance.comments = this.comments;

    modalRef.result.then((commentCallBack) => {
      if (commentCallBack) {
        console.log(commentCallBack);
      }
    });
}
  /**
   *
   * Iniatilisation Formulaire
   */
/*  initCommentForm(){
    this.commentForm = this.formBuilder.group({
      description: ['',Validators.required]
    })
  }*/

  /**
   *
   * Recuperation des categories
   */
  getComments(){
    this.commentsService.getAllComments().subscribe(
      reponse => {
        this.comments = reponse;
      });
  }

  /**
   *
   * Mise à jour commentaire
   */
/*  updateCommentById(){
    this.commentService.updateComment(this.userIdUpdateApi,this.commentForm.value).subscribe({
      next: data => {
        this.getComments();
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });;
    $('#changeStatus').modal('hide');
    this.resetDroitToChange();
  }*/

}
