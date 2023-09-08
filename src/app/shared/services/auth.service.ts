import { User } from "../models/user";
import { HttpClient } from '@angular/common/http';
import { Injectable } from'@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    private _baseUrl = '/api/sessions';

    constructor(private _http: HttpClient){
    }
    public auth(loginCred: User){
        console.log("authService auth: ",  this._baseUrl, loginCred);
        console.log("auth2:",this._http.post(this._baseUrl, loginCred));
        return this._http
            .post<User>(this._baseUrl, loginCred);
    }

}
