import { Injectable } from '@angular/core';
import { User } from "../models/User";
import { Token } from "../models/Token";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectionService {
  public isConnectedToBackend: boolean = false;

  constructor(private http: HttpClient) { }

  hostnameTest(): void {
    if (window.location.host == "localhost:3000") {
      this.isConnectedToBackend = true;
    }
  }

  loginUser(user: User): Observable<Token> {
    return this.http.post("/users/login", user) as Observable<Token>;
  }

  createUser(user: User): Observable<Token> {
    return this.http.post("/users", user) as Observable<Token>;
  }

  getDecodedUser(token: string): Observable<User> {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${token}`)
    };
    return this.http.get("/user/decoded", header) as Observable<User>;
  }
}
