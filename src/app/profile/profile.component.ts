import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service.spec';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  storedPosts: any = [];


onPostAdded(post:any){
  this.storedPosts.push(post);
  this.myPostService.createPost(post).subscribe(myResponse => {
    console.log(myResponse)
  })

  console.log(post);
}
  constructor(private myUserService: UserService, private myPostService: PostService,
     private myRouter: Router) { }


    ngOnInit(): void {
      if(!localStorage.getItem("myAppToken")){
        window.alert("You are Not Logged In");
        this.myRouter.navigate(["/login"])

      }
      // this.myUserService.getUserProfile().subscribe(myResponseObject => {
      //   console.log(myResponseObject);
      //   this.currentUser = myResponseObject.user;
      }
    }





