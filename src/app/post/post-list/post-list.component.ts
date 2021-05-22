import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  @Input() posts: any = [];

  containsPost: boolean = false;
  PostId: any;
  //router: any;
  currentPost: any;

  constructor(private myPostService: PostService, private router:Router) { }


  ngOnInit(): void {
    this.myPostService.getAllPost().subscribe(response => {
      console.log(response);
      this.listOfPosts = response.message;

    });
  }

  postsLength() {
    if (this.listOfPosts.length > 0) {
      return true;
    } else {
      return false;
    };
  }
  deletePost(id): void {
    this.myPostService.deletePost(id)
    .subscribe(
      response => {
    console.log(response);
    this.ngOnInit();
    this.router.navigate(['profile']);
      },
    error => {
      console.log(error);
    });
  }
}
