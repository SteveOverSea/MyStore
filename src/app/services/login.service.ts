import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Token } from '../models/Token';
import { BackendConnectionService } from "./backend-connection.service";
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usertoken = new BehaviorSubject<string>("");
  loggedInUser = new BehaviorSubject<User>(new User());
  loggedIn = new BehaviorSubject<boolean>(false);
  userExists= new BehaviorSubject<boolean>(true);

  constructor(private backendConnectionService: BackendConnectionService) { }

  loginUser(user: User): void {
    this.backendConnectionService.loginUser(user).subscribe((data: Token) => { 
      if(data) {
        this.usertoken.next(data.token);
        this.loggedIn.next(true);
        this.backendConnectionService.getDecodedUser(this.usertoken.value).subscribe((data: User) => this.loggedInUser.next(data));
      }
    }, ( err: HttpErrorResponse ) => {
      console.log(err.error);
      this.userExists.next(false);
    });
  }

  shouldUserBeCreated(answer: string, user: User): void {
    if (answer === "true") {
      this.backendConnectionService.createUser(user).subscribe(( data: Token ) => {
        this.usertoken.next(data.token);
        this.loggedIn.next(true);
        this.backendConnectionService.getDecodedUser(this.usertoken.value).subscribe((data: User) => this.loggedInUser.next(data));
      });
    } else if (answer === "false") {
      this.userExists.next(true);
    }
  }

  logout(): void {
    this.usertoken.next("");
    this.loggedIn.next(false);
    this.loggedInUser.next(new User());
    this.userExists.next(true);
  }
}
 
