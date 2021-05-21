import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../../models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  first_name: string = "";
  last_name: string = "";
  password: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

   async onSubmit(): Promise<void> {
    // check if user exists
    console.log(JSON.stringify({
      first_name: this.first_name,
      last_name: this.last_name,
      password: this.password
    }));

    try {
      const response = await (await fetch("/users/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: this.first_name,
          last_name: this.last_name,
          password: this.password
        })
      })).json();
  
      console.log(response);
    } catch (error) {
      console.log(error);
    }


    // otherwise ask if new one should be created

    // LOGIN form should be an own child component on the navigation
  }

  toggleForm(e: Event): void {
    const form = document.getElementById("login-form") as HTMLFormElement;
    form.hidden = !form.hidden;
  }

}
