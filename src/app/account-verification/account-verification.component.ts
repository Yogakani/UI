import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountVerifyService } from './account-verification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.component.html',
  styleUrls: ['./account-verification.component.css'],
  providers: [AccountVerifyService]
})
export class AccountVerificationComponent implements OnInit {

  verMsg : String = 'Your account has been created. Please verify your email & mobile to complete registration.'

  constructor(private router : ActivatedRoute, private verifyService : AccountVerifyService,
      private route : Router) { }

  public sub : any;

  userName : string;

  email : string;

  mobile : number;

  isVerifyEmail : boolean = false;

  urlEmail : string = 'http://localhost:8080/user/verifyEmail';

  isMailSent : boolean = false;

  mailSentDes : String = 'Check your inbox and click on the link in the mail to confirm verification';

  isEmailVerified : boolean = false;

  verifiedEmail : String = 'Your email is verified';

  routedEmailVerif : String;



  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      console.log(params);
      this.userName = params['userName'];
      this.email = params['email'];
      this.mobile = params['mobile'];
      this.routedEmailVerif = params['emailVer'];
      if(this.routedEmailVerif == 'true') {
        this.isEmailVerified = !this.isEmailVerified
      }
    });

  }

  verifyEmail() {
    this.isVerifyEmail = !this.isVerifyEmail;

    this.verifyService.verifyEmail(this.urlEmail, this.email, this.userName).subscribe( (data) => {
      console.log(data);
      if(data == 'sent') {
        this.isMailSent = !this.isMailSent;
        console.log('Message sent');        
      }
    });
  }

  onLogin() {
    this.route.navigateByUrl("/login");
  }


}
