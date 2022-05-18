import { Component, OnInit } from '@angular/core';
import {Providers} from "../../interfaces/providers";
import {ProvidersService} from "../../services/providers.service";

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

  providers!:Providers[];

  constructor(private providersService:ProvidersService) { }

  ngOnInit(): void {

    this.getproviders();
  }


  /**
   *
   * Recuperation des fournisseurs
   */
  getproviders(){
    this.providersService.getAllProviders().subscribe(
      reponse => {
        this.providers = reponse;
      });
  }

}
