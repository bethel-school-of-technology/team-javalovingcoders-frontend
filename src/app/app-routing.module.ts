import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
   //local host:4200/login
    { path: "login", component: LoginComponent },
    //local host:4200/signup
    { path: "signup", component: SignupComponent },
    //local host:4200/post
    { path: "post", component: PostComponent  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
