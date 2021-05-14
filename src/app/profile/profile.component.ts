import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service.spec';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  storedPosts: any = [];

  currentUser: User = new User();

  onPostAdded(post: any) {
    this.storedPosts.push(post);
    console.log(post)
  }
  constructor(private myUserService: UserService, private myRouter: Router) { }

  ngOnInit(): void {


  }
}
