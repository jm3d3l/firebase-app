import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './parts/header/header.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { MyOrderComponent } from './pages/my-order/my-order.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { FirebaseService } from './services/firebase-service.service';
import { AuthGuard } from './auth-guard/auth.guard';
import { AdminGuard } from './admin-guard/admin.guard';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { PromptComponent } from './modal/prompt/prompt.component';
import { BsModalService, ModalBackdropComponent } from 'ngx-bootstrap';
import { ModalContainerComponent } from 'ngx-bootstrap/modal';
import { BootstrapModule } from './bootstrap.module';
import { CategoryService } from './services/category.service';
import { ProductFilterComponent } from './pages/product/product-filter/product-filter.component';
import { ProductCardComponent } from './pages/product-card/product-card.component';
import { WindowRef } from './windowRef/window.provider';
import { ProductQuantityComponent } from './pages/product-quantity/product-quantity.component';
import { OrderSummaryComponent } from './pages/my-order/order-summary/order-summary.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'check-out',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'order-success/:id',
    component: OrderSuccessComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my-orders',
    component: MyOrderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/products/new',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/products/:id',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BootstrapModule,
  ],
  exports: [
    RouterModule,
    BootstrapModule
  ],
  entryComponents: [
    ModalBackdropComponent,
    ModalContainerComponent,
    CheckoutComponent
  ],




})
export class AppRoutingModule { }


export const AppDeclaration: any = [
  AppComponent,
  HeaderComponent,
  ShoppingCartComponent,
  HomeComponent,
  ProductComponent,
  CheckoutComponent,
  OrderSuccessComponent,
  MyOrderComponent,
  LoginComponent,
  AdminProductsComponent,
  AdminOrdersComponent,
  ProductFormComponent,
  ModalBackdropComponent,
  ModalContainerComponent,
  PromptComponent,
  ProductFilterComponent,
  ProductCardComponent,
  ProductQuantityComponent,
  OrderSummaryComponent
];

export const AppProvider: any = [
  CategoryService,
  FirebaseService,
  BsModalService,
  AuthGuard,
  AdminGuard,

  WindowRef
];

