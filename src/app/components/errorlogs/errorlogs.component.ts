import { Component, OnInit } from '@angular/core';
import {ErrorLogs} from "../../interfaces/errorLogs";
import {ErrorService} from "../../services/error.service";

@Component({
  selector: 'app-errorlogs',
  templateUrl: './errorlogs.component.html',
  styleUrls: ['./errorlogs.component.scss']
})
export class ErrorlogsComponent implements OnInit {

  errorLogs!:ErrorLogs[];

  constructor(private errorLogsService:ErrorService) { }

  ngOnInit(): void {

    this.getErrorLogs();
  }


  /**
   *
   * Récupération des logs d'erreurs
   */
  getErrorLogs(){
    this.errorLogsService.getAllErrorLogs().subscribe(
      reponse => {
        this.errorLogs = reponse;
      });
  }

}
