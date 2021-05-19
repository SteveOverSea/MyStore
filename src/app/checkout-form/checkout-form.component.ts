import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  name: string = "";
  address: string = "";
  creditCard: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert("Success with " + this.name + ", " + this.address + ", " + this.creditCard);
  }

}
