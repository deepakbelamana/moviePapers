import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor() { }
  forgotPassword:boolean = false;
  ngOnInit(): void {

  }
  onForgotPassword(){

  }

  enableForgotPasswordForm(){
    this.forgotPassword=true;
  }
  onBackToLogin(){
    this.forgotPassword=false;
  }
}
