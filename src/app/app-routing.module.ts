import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './layout/main/main.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard} from './guards/auth.guard';
import { SanphamAddComponent } from './sanpham-add/sanpham-add.component';
import { SanphamEditComponent } from './sanpham-edit/sanpham-edit.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent} from './product-edit/product-edit.component';

const routes: Routes = [

  { path:'sanpham', component: SanPhamComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  { path:'login', component: LoginComponent},
  { path:'admin', component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  { path:'sanpham-add', component: SanphamAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  { path:'sanpham-edit/:id', component: SanphamEditComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path:'product',
    component: ProductComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path:'product-add',
    component: ProductAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  { path:'product-edit/:id', component: ProductEditComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
