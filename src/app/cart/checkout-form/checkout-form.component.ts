import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userdata } from "../../models/Userdata";
import { Order } from "../../models/Order";
import { CartService } from "../../services/cart.service";


@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  name: string = "";
  address: string = "";
  creditCard: string = "";
  userdata: Userdata = new Userdata();
  order: Order = new Order();

  constructor(private router: Router, private cart: CartService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userdata.fullname = this.name;
    this.userdata.address = this.address;
    this.userdata.creditCard = this.creditCard;

    this.order.products = this.cart.get();
    this.order.userdata = this.userdata;

    this.cart.saveOrder(this.order);
    
    this.router.navigateByUrl("/confirm");
  }

}
