import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Registration } from '../models/registration';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';
import { UserResponse } from '../models/UserResp';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers : [RegistrationService]
})
export class RegistrationComponent implements OnInit {
  
  registrationForm : FormGroup;

  submitted : boolean = false;

  userNameReqDes : String = 'Please enter Username';

  pwdReqDes : String = 'Please enter Password';

  mobilReqDes : String = 'Please enter Mobile';

  addressReqDes : String = 'Please enter Address';

  cityReqDes : String = 'Please enter City';

  postalCodeReqDes : String = 'Please enter Postal Code';

  private registration : Registration;

  url : string = 'http://localhost:8080/user/register';

  userRes : UserResponse;

  failureMsg : boolean = false;

  failureDes : String = 'Username already exist. Please login';


  constructor(private formBuilder : FormBuilder, private registrationService : RegistrationService, 
        private router : Router) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      userName : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      mobile : ['', Validators.required],
      address : ['', Validators.required],
      city : ['', Validators.required],
      postalCode : ['', Validators.required]
    });
  }

  onRegistration(){
    this.submitted = true;

    if(this.registrationForm.invalid) {
      return;
    }

    this.registration = new Registration();
    this.registration.userName = this.registrationForm.get('userName').value;
    this.registration.email = this.registrationForm.get('email').value;
    this.registration.password = this.registrationForm.get('password').value;
    this.registration.mobile = this.registrationForm.get('mobile').value;
    this.registration.address = this.registrationForm.get('address').value;
    this.registration.city = this.registrationForm.get('city').value;
    this.registration.postalCode = this.registrationForm.get('postalCode').value;

    this.registrationService.registerUser(this.url,this.registration).subscribe((data) => {
      console.log(data);
      this.userRes = data;
      if(this.userRes.userName == null) {
        console.log('User Already exist');
        this.failureMsg = !this.failureMsg;
      } else {
        console.log(this.userRes.userName);
        this.router.navigate(['/accountVerification', this.userRes]);
      }
    });

  }

}
