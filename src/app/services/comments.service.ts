import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Categories} from "../interfaces/categories";
import {environment} from "../../environments/environment";
import {Comments} from "../interfaces/comments";
import {HttpClient} from "@angular/common/http";
import {UpdateComment} from "../interfaces/updateComment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments!:Comments[];

  constructor(private httpClient: HttpClient) { }

  /**
   *
   * Recuperation de tous les commentaires
   */
  getAllComments(): Observable<Comments[]> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<Comments[]>(environment.apiUrl + '/comments',{'headers':headers});
  }


  /**
   *
   * Modification d'un commentaire
   */
  updateComment(id : number,content : string){
    const body=JSON.stringify(content);
    const headers = { 'content-type': 'application/json','Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.put<UpdateComment>(environment.apiUrl + '/comments/' + id, body,{'headers':headers} );
  }



}
