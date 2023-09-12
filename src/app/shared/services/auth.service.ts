import { User } from "../models/user";
import { HttpClient } from '@angular/common/http';
import { Injectable } from'@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    private _baseUrl = 'http://localhost:8081/sessions';


    constructor(private _http: HttpClient){
    }

    public auth(loginCred: User){
        return this._http.post<User>(this._baseUrl, loginCred);
    }

}
