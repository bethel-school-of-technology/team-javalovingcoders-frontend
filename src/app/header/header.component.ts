import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent {
router: any;

getToken(){
  return localStorage.getItem("myAppToken")
}

logout(){
  localStorage.clear();

}
myRedirect(){
  location.replace("/login")
}
}
