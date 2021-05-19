import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  name: string = "";
  address: string = "";
  creditCard: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert("Success with " + this.name + ", " + this.address + ", " + this.creditCard);
    this.router.navigateByUrl("/confirm");
  }

}
