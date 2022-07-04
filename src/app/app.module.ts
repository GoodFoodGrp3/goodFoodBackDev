import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommoditiesComponent } from './components/commodities/commodities.component';
import { CustomersComponent } from './components/customers/customers.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { MembersComponent } from './components/members/members.component';
import { ErrorlogsComponent } from './components/errorlogs/errorlogs.component';
import { OfficesComponent } from './components/offices/offices.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ProfilComponent } from './components/profil/profil.component';
import { CommentModalComponent } from './modals/comment-modal/comment-modal.component';
import { CommentDeleteComponent } from './modals/comment-delete/comment-delete.component';
import { CommodityDeleteComponent } from './modals/commodity-delete/commodity-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    SidebarComponent,
    FooterComponent,
    CategoriesComponent,
    TopbarComponent,
    CommentsComponent,
    CommoditiesComponent,
    CustomersComponent,
    EmployeesComponent,
    MembersComponent,
    ErrorlogsComponent,
    OfficesComponent,
    OrdersComponent,
    ProductsComponent,
    ProvidersComponent,
    ProfilComponent,
    CommentModalComponent,
    CommentDeleteComponent,
    CommodityDeleteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule
    ],
  entryComponents:[
    CommentModalComponent,
    CommentDeleteComponent,
    CommodityDeleteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
