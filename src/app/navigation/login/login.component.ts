import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Token } from "../../models/Token";
import { BackendConnectionService } from "../../services/backend-connection.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  first_name: string = "";
  last_name: string = "";
  password: string = "";
  usertoken: string = "";
  userExists: boolean = true;

  constructor(private backendConnectionService: BackendConnectionService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // check if user exists


   
    this.backendConnectionService.loginUser({
      first_name: this.first_name,
      last_name: this.last_name,
      password: this.password
    }).subscribe(( data: Token) => { 
      if(data) {
        this.usertoken = data.token;
        console.log(this.usertoken);
      }
    }, ( err: HttpErrorResponse ) => {
      console.log(err.error);
      this.userExists = false;
    });


    // otherwise ask if new one should be created

    // LOGIN form should be an own child component on the navigation
  }

  selectInput(e: Event): void {
    const selectValue: string  = (e.target as HTMLSelectElement).value;

    if (selectValue === "true") {
      this.backendConnectionService.createUser({
        first_name: this.first_name,
        last_name: this.last_name,
        password: this.password
      }).subscribe(( data: Token ) => {
        this.usertoken = data.token;
        console.log(this.usertoken);
        this.userExists = true;
      });

    } else if (selectValue === "false") {
      this.userExists = true;
    }
  }

  toggleForm(e: Event): void {
    const form = document.getElementById("login-form") as HTMLFormElement;
    form.hidden = !form.hidden;
  }

}
