import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Token } from "../../models/Token";
import { User } from "../../models/User";
import { BackendConnectionService } from "../../services/backend-connection.service";
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  first_name: string = "";
  last_name: string = "";
  password: string = "";
  isLoggedIn: boolean = false;
  userExists: boolean = true;

  @Output() userLoggedIn: EventEmitter<void> = new EventEmitter();

  constructor(private backendConnectionService: BackendConnectionService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.loggedIn.subscribe((data: boolean) => {
      this.isLoggedIn = data;
      if (this.isLoggedIn) {
        this.userLoggedIn.emit();
        this.first_name = "";
        this.last_name = "";
        this.password = "";
      }
    });
    this.loginService.userExists.subscribe((data: boolean) => this.userExists = data);
  }

  onSubmit(): void {
    this.loginService.loginUser({
      first_name: this.first_name,
      last_name: this.last_name,
      password: this.password,
      is_admin: false
    });

    
  }

  selectInput(e: Event): void {
    const selectValue: string  = (e.target as HTMLSelectElement).value;

    this.loginService.shouldUserBeCreated(selectValue, {
      first_name: this.first_name,
      last_name: this.last_name,
      password: this.password,
      is_admin: false
    });

    if (this.isLoggedIn) {
      this.userLoggedIn.emit();
    }
    
    this.first_name = "";
    this.last_name = "";
    this.password = "";
  }

  toggleForm(e: Event): void {
    const formContainer = document.getElementById("login-form") as HTMLFormElement;
    formContainer.hidden = !formContainer.hidden;
  }

  logout(e: Event): void {
    this.loginService.logout();
  }

}
