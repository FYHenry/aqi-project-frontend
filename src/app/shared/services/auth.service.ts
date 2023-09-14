import { User } from "../models/user";
import { HttpClient } from '@angular/common/http';
import { Injectable } from'@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    private _baseUrl = '/api/';

    constructor(private _http: HttpClient){
    }

    public auth(loginCred: User){
        return this._http.post<User>(`${this._baseUrl}sessions`, loginCred);
    }

    public logout(){
        return this._http.post(`${this._baseUrl}logout`,{});
    }

}
