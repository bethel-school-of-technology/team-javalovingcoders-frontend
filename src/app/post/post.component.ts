import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
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


  ngOnInit(): void {
  }

  refresh(): void {
    window.location.reload();
  }
}

