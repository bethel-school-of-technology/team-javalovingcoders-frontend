import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service.spec';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading = false;

  loginform = {
    username: "",
    password: ""
  }

  onLogin(form: NgForm) {
    console.log(form.value);
  }
}



    //ngOnInit(); void {

   // login(){
   //   console.log(this.loginform);
     // this.myUserService.loginUser(this.loginform.username, this.loginform.password).subscribe((myResponseObject: any) => {
       // console.log(myResponseObject);
        //if(myResponseObject.status === 200) {
          //window.alert(myResponseObject.message);
          //localStorage.setItem("myAppToken", myResponseObject.token);
         // this.myRouter.navigate(["/profile"]);
        //}else{
          //window.alert(myResponseObject.message);
        //}
      //})
   // }
