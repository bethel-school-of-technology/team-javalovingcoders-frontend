export class User {
  id!: number;
  fullName: string | undefined;
  email: string | undefined;
  username:string | undefined;
  password: string | undefined;

constructor(){
  this.fullName = "";
  this.email = "";
  this.username = "";
  this.password = "";
}
}
