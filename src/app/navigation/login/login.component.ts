import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert("username:" + this.username + ", password: " + this.password);
    // check if user exists
    // otherwise ask if new one should be created

    // LOGIN form should be an own child component on the navigation
  }

  toggleForm(e: Event): void {
    const form = document.getElementById("login-form") as HTMLFormElement;
    form.hidden = !form.hidden;
  }

}
