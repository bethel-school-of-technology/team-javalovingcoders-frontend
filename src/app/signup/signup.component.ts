import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private usersRoute = 'http://localhost:4200/signup';
  model: User = new User();
  public SignupComponent: any; UserService: any[] = [];
  constructor(private http: HttpClient) { }

  getUsers() {
    this.http.get<User[]>(this.usersRoute).subscribe(users => {
      this.SignupComponent = users;
    })
  }
  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit Successful: ', this.model);
  }
  }
