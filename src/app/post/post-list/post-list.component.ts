import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts= [
  //   {title: '1 this Post', content: 'this is the first post\'s contact'},
  //   {title: '2 this Post', content: 'this is the first post\'s contact'},
  //   {title: '3 this Post', content: 'this is the first post\'s contact'}

  // ];

  @Input() posts:any= [];

  constructor() { }

  ngOnInit(): void {
  }

  postsLength() {
    if (this.posts.length > 0) {
      return true;
    } else  {
      return false;
    }
  }

}
