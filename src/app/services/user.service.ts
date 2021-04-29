import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myHttp: HttpClient) { }

  //Function to make a server request to /api/users/
  //type of Request: POST
  //need to provide new user data(this needs to come from the component)
}
