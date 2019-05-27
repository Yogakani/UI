import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { UserResponse } from '../models/UserResp';

@Injectable({
    providedIn : "root"
})
export class ActivateEmailService {

    constructor(private httpClient : HttpClient) {}

    public activate(url : string, userName : string) : Observable<UserResponse>{
        console.log('Sending request to Microservice - user for activating email');
        let httpHeader = new HttpHeaders({'userName' : userName});
        return this.httpClient.get<UserResponse>(url, {headers : httpHeader});
    }
}