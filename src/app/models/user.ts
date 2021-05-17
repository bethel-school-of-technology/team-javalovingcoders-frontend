export class User {
  userId: number;
  fullName: string | undefined;
  email: string | undefined;
  username:string | undefined;
  password: string | undefined;

constructor(){
  this.userId = 0;
  this.fullName = "";
  this.email = "";
  this.username = "";
  this.password = "";
}
}
