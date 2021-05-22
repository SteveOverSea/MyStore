import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from "./product-list/product-list.component";
import { CartComponent } from "./cart/cart.component";
import { ProductDetailsComponent } from "./product-list/product-details/product-details.component";
import { OrderConfirmationComponent } from "./order-confirmation/order-confirmation.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { UserpageComponent } from "./userpage/userpage.component";

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductDetailsComponent},
  { path: 'confirm', component: OrderConfirmationComponent},
  { path: 'addProduct', component: AddProductComponent},
  { path: 'userpage', component: UserpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
