import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../models/registration';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/UserResp';


@Injectable({
    providedIn :'root'
})

export class RegistrationService {

    constructor(private httpClient : HttpClient){}

    registerUser(url : string, registration : Registration) : Observable<UserResponse> {
        console.log('Sending request to User Microservice for registration');
        return this.httpClient.post<UserResponse>(url, registration);
    }

}