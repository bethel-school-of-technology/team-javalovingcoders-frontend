import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { SignupComponent } from "../signup/signup.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule

  ],
  declarations: [SignupComponent],
  exports: [SignupComponent]
})
export class UserService { }
