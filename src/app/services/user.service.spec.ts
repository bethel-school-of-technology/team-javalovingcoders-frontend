import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule

  ],
  declarations:[],

  exports:[],
})
export class UserService {
  loginUser(username: string, password: string) {
    throw new Error('Method not implemented.');
  }
  getUserProfile() {
    throw new Error('Method not implemented.');
  }
}
