import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivateEmailService } from './activate-email.service';
import { UserResponse } from '../models/UserResp';

@Component({
  selector: 'app-activate-email',
  templateUrl: './activate-email.component.html',
  styleUrls: ['./activate-email.component.css']
})
export class ActivateEmailComponent implements OnInit {

  msg : String = 'Your email is verified. Click the button below to complete the process';

  sub : any;

  userName : string;

  url : string = 'http://localhost:8080/user/activateEmail';

  userRes : UserResponse;
  

  constructor(private router : ActivatedRoute, private activateEmailService : ActivateEmailService, 
        private route : Router) { }

  ngOnInit() {
    this.sub = this.router.queryParams.subscribe( params => {
      this.userName = params['userName'];
      console.log(this.userName);
    })
  }

  activateEmail(){
    this.activateEmailService.activate(this.url, this.userName).subscribe( (data) => {
      this.userRes = data;
      console.log(this.userRes ); 
      console.log(this.userRes.emailVer);
      if(this.userRes.emailVer) {
        this.route.navigate(['accountVerification', this.userRes]);
      }
    })
  }
}
