import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

//I think I might need this profile route so that I can add the posts to the profile. Stay tuned. 
//import { Profile } from "../models/profile"

@Injectable({
  providedIn: 'root'
})
export class PostService {

  myPostURL: string ="localhost:3000/post"

  constructor(private http: HttpClient) { }

  //we need a way to get all posts (READ)
  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.myPostURL)
  }

  //This will get one of the posts the user has created (gotten by id)
  //Component needs an ID
  getOnePost(reqID: number): Observable<Post> {
    return this.http.get<Post>(`${this.myPostURL}/${reqID}`)
  }

  //We need a way to update the post information (UPDATE)
  updatePost(editID: number, edditedInfo: Post): Observable<Post> {
    return this.http.put<Post>(`${this.myPostURL}/${editID}`,edditedInfo)

  }

  //we need a way to delete the posts (DELETE)
  deletePost(deleteID: number):Observable<any> {
    return this.http.delete<any>(`${this.myPostURL}/${deleteID}`)
  }

  //We need a way to create a new post (CREATE)
  //Component needs to provide the new post information.
  createPost(newPost: Post): Observable<Post> {
    return this.http.post<Post>(this.myPostURL,newPost)
  }


}

 

