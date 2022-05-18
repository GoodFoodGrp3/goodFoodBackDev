import { Component, OnInit } from '@angular/core';
import {Comments} from "../../interfaces/comments";
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments!:Comments[];

  constructor(private commentsService:CommentsService) { }

  ngOnInit(): void {

    this.getComments();
  }

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

}