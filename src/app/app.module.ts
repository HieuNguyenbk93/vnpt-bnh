import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // import để dùng api

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';

//services
import { API } from './services/api'; //import API
import { AccountService } from './services/account.service';
import { AdminComponent } from './admin/admin.component';
import { SanphamService } from './services/sanpham.service';
import { SanphamAddComponent } from './sanpham-add/sanpham-add.component';
import { SanphamEditComponent } from './sanpham-edit/sanpham-edit.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SanPhamComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AdminComponent,
    SanphamAddComponent,
    SanphamEditComponent,
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,        // use sau khi import bên trên
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    API,                 // use sau khi import, khai báo vào providers
    AccountService,      // thêm services
    SanphamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
