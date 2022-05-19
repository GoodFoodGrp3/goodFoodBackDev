import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Categories} from "../interfaces/categories";
import {environment} from "../../environments/environment";
import {Comments} from "../interfaces/comments";
import {HttpClient} from "@angular/common/http";

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


}
