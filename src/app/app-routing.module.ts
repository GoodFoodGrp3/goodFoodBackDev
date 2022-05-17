import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthGuardService as AuthGuard} from './services/auth-guard.service';
import {CategoriesComponent} from "./components/categories/categories.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {CommoditiesComponent} from "./components/commodities/commodities.component";
import {CustomersComponent} from "./components/customers/customers.component";


const routes: Routes = [
  { path: '',  component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'comments', component: CommentsComponent,canActivate: [AuthGuard] },
  { path: 'customers', component: CustomersComponent,canActivate: [AuthGuard] },
  { path: 'commodities', component: CommoditiesComponent,canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  { path: 'categories', component: CategoriesComponent , canActivate: [AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
