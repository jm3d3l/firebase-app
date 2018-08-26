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
    canActivate: [AuthGuard]
  },
  {
    path: 'check-out',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my-orders',
    component: MyOrderComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
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
AdminOrdersComponent
];

export const AppProvider: any = [
  FirebaseService,
  AuthGuard
];

