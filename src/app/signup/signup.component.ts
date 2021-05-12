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

constructor() {}

    onSignup(form: NgForm){
    console.log(form.value)
  }
}
