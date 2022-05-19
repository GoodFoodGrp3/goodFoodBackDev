import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from "../../services/login.service";
import {Login} from "../../interfaces/login";

@Component
({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit
{
  /**
   *
   * Formulaire Connexion d'un utilisateur
   */

  errorLogin: any;

  connexionForm!: FormGroup;

  errorConnection= false;

  constructor(
  private formBuilder: FormBuilder,
  private loginService: LoginService,
  private router : Router) { }


  ngOnInit(): void
  {
    if(sessionStorage.getItem('token') != null && sessionStorage.getItem('token')!.length > 1)
    {
        this.router.navigateByUrl('/home');
    }

    this.initConnexionForm();
  }

  /**
   *
   * Initialisation Formulaire Connexion
   */
  initConnexionForm()
  {
      this.connexionForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }


  /**
   *
   * Connexion d'un utilisateur
   */
  checkUser()
  {
    this.loginService.CheckUser(this.connexionForm.value).subscribe
    ({
      next: (data: any) =>
      {
        sessionStorage.setItem('token',data['token']);
        window.location.reload();
      },

      error: (error: any) =>
      {
        this.errorLogin = error.error.details;
        this.errorConnection = true;
      }

    }
    );
  }



}
