import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-viewallpost',
  templateUrl: './viewallpost.component.html',
  styleUrls: ['./viewallpost.component.css']
})
export class ViewallpostComponent implements OnInit {
  listOfPosts: Post[] = [];

  constructor() { }

  postsLength() {
    if (this.listOfPosts.length > 0) {
      return true;
    } else {
      return false;
    };
  }
  
  ngOnInit(): void {
  }

}
