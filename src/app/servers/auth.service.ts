import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticated : boolean=false

  isAuthenticated() : boolean {
    return this.authenticated
  }

  loginUser(): boolean {
    //call user service and authenticate user
    this.authenticated=true;
    return this.isAuthenticated();
  }
  logOutuser(){
    this.authenticated=false;
  }

}
