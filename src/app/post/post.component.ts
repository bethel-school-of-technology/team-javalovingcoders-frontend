import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  enteredValue = '';
  newPost ='';
  
  onAddPost() {
    this.newPost = this.enteredValue;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
