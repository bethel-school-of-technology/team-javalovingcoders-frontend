import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading = false;

  newUser: User = new User();

  constructor(private myUserService: UserService, private myRouter: Router) { }

  signup() {
    console.log(this.newUser);
    this.myUserService.registerUser(this.newUser).subscribe((myResponseObject: any) => {
      console.log(myResponseObject);
      if (myResponseObject.status === 200) {
        this.myRouter.navigate(["/login"]);
      } else { }
     })
  }
}
