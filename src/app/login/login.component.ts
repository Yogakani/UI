import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  private loginForm : FormGroup;

  private user : User;

  signupMsg : String = 'If youre new';

  failureMsg : boolean = false;

  failureDes : String = 'Username does not match with Password';

  userNameReqDes : String = 'Please enter Username';

  pwdReqDes : String = 'Please enter Password';

  url : string = 'http://localhost:8080/user/checkUser';

  result : String;

  submitted : boolean = false;
  
  constructor(private formBuilder : FormBuilder, private loginService : LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName : ['',Validators.required],
      password : ['',Validators.required]
    });
  }

  onLogin() {
    this.submitted = true;

    if(this.loginForm.invalid) {
      return;
    }
    
    this.user = new User();
    this.user.userName = this.loginForm.get('userName').value;
    this.user.password = this.loginForm.get('password').value;
    console.log(this.user.userName);
    this.loginService.checkUser(this.url, this.user).subscribe( (data)  => 
      { 
        console.log('returned back');
        console.log(data);
        this.result = data;
        if(this.result == 'success') {
          console.log('success');
        } else {
          console.log('failed');
          this.failureMsg = !this.failureMsg;
      }
    });
    
  }

}
