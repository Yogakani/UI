import { Injectable } from "@angular/core";
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})

export class LoginService {

    constructor(private httpClient : HttpClient) {

    }

    public checkUser (url : string, user : User): Observable<String> {
        console.log(url);
        console.log(user.userName);
        console.log('Sending request to User Microservice');
        return this.httpClient.post(url, user, {responseType: 'text'});
    }

}