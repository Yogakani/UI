import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/UserResp';

@Injectable({
    providedIn : 'root'
})
export class AccountVerifyService {

    constructor(private httpClient : HttpClient) {}

    public verifyEmail(url : string, email : string, userName :  string) : Observable<String> {
        console.log('Sending request to Microservice for verify Email');
        let httpHeader = new HttpHeaders({'email': email , 'userName' : userName});
        return this.httpClient.get(url, {headers : httpHeader, responseType : 'text'});
    }

}