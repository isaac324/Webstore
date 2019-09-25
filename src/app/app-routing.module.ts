import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SigninComponent } from './signin/signin.component';

import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FinalizeComponent } from './finalize/finalize.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'list', component: ListComponent },
  {path: 'signin', component: SigninComponent },
  {path: 'detail', component: DetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'finalize', component: FinalizeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
