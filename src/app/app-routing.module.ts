import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  // localhost:4200/
    {path: "", redirectTo: "/login", pathMatch: "full" },
   //local host:4200/login
    { path: "login", component: LoginComponent },
    //local host:4200/signup
    { path: "signup", component: SignupComponent },
    //local host:4200/post
    { path: "post", component: PostComponent  },
    { path: "**", redirectTo: "404"}
];



@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
