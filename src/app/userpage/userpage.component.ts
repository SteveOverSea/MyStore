import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  user: User = new User();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.loggedInUser.subscribe(( data: User) => this.user = data);
  }

}
