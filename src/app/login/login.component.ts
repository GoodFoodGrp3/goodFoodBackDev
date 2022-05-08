import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  goToPages(pageName:string): void {
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
  }

}
