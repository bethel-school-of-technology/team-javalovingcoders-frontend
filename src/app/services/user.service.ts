import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  newUser() {
    throw new Error('Method not implemented.');
  }
  getAllUsers() {
    throw new Error('Method not implemented.');
  }
  createUser(newUser: (newUser: any) => void) {
    throw new Error('Method not implemented.');
  }
  myUserURL: string = "http://localhost:3000/login"

  constructor(private http: HttpClient) { }

  //we need a way for users to signup
  //we need a way for users to login
  //we need a way for users to create posts
  //we need a way for users to create profile
  //we need a way for users to logout
  //we need a way for users to search posts

}
