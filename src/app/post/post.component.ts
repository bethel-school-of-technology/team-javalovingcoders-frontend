import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  enteredTitle='';
  enteredContent='';
  @Output() postCreated = new EventEmitter();
  

  // This has to match the backend (below)

  onAddPost() {
    const post =
    {
      postTitle: this.enteredTitle,

      postBody: this.enteredContent
    };

    this.postCreated.emit(post);
  }
  constructor() { }
  //private myPostService: PostService, private router: Router (Goes in the constructor above)

  ngOnInit(): void {
  }

  // createNew(){
  //   this.myPostService.createPost(this.newPost).subscribe(response => {
  //     console.log(response)
  //   })
  // }

}
