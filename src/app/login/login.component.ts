import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading = false;

  loginForm = {
    username: "",
    password: ""
  }

  constructor(private myUserService: UserService, private myRouter: Router) { }

  login() {
    console.log(this.loginForm);
    this.myUserService.loginUser(this.loginForm.username, this.loginForm.password).subscribe((myResponseObject: any) => {
      console.log(myResponseObject);
      if (myResponseObject.status === 200) {
        window.alert(myResponseObject.message);
        localStorage.setItem('myAppToken', myResponseObject.token);
        this.myRouter.navigate(["/profile"]);
      } else
        window.alert(myResponseObject.message);
    })
  }
  newUser(newUser: any) {
    throw new Error('Method not implemented.');
  }
}
