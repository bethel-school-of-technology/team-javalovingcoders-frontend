import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  storedPosts: any = [];
  

  onPostAdded(post: any) {
    this.storedPosts.push(post);
    console.log(post)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
