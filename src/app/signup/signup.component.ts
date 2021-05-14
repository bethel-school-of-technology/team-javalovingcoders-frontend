import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading = false;
  myUserService: any;

  constructor() { }

  signup() {
    console.log(this.newUser);
    this.myUserService.registerUser(this.newUser).subscribe((myResponseObject: any) => {
      console.log(myResponseObject);
    })
  }
  newUser(newUser: any) {
    throw new Error('Method not implemented.');
  }
}
