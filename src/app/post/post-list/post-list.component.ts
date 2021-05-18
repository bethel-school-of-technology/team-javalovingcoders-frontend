import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // Property to store all of the posts
   listOfPosts: Post[] = [];

  @Input() posts:any= [];

  containsPost: boolean = false;

  constructor( private myPostService: PostService ) { }

  // Below goes inside the constructor 
  

  ngOnInit(): void {
    this.myPostService.getAllPost().subscribe(response => {
      console.log(response);
      this.listOfPosts = response.message;
 
    })
  }

  postsLength() {
    if (this.listOfPosts.length > 0) {
      return true;
    } else  {
      return false;
    }
  }

}
