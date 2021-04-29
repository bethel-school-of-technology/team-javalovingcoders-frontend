import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    login = {
    username:"",
    password:""
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  signin(){
    console.log(this.login);
  }

}
