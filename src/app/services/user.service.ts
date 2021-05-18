/* tslint:disabled */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myHttp: any;
  static registerUser(newUser: (newUser: any) => void) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  serverUserURL: string = "http://localhost:3001/users";

  //we need a way for users to signup
  //type of request: POST
  registerUser(newUser: User): Observable<any>{
    return this.http.post(this.serverUserURL+"/signup", newUser);
  }
  //we need a way for users to login
  //type of request: POST
  loginUser(username: string, password: string): Observable<any>{
    let loginInfo={
      username,
      password
    }
    return this.http.post(this.serverUserURL+"/login", loginInfo);
  }
  //we need a way for users to create posts
  //we need a way for users to create profile
  //type of request: GET
  getUserProfile(): Observable<any>{
    let myHeaders = {
      Authorization: localStorage.getItem("myAppToken")
    }
    return this.http.get(this.serverUserURL+"/profile", {headers: {
      Authorization: localStorage.getItem("myAppToken")
    }});
  }
  //we need a way for users to logout
  //we need a way for users to search posts
}
