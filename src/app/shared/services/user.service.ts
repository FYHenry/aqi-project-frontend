import { User } from "../models/user";
import { HttpClient } from '@angular/common/http';
import { Injectable } from'@angular/core';
import { Observable } from "rxjs";
import { ConnectedUser } from "../models/connectedUser";
import { NewUser } from "../models/newuser";

@Injectable({
    providedIn: 'root'
})

export class UserService{
    private _baseUrl = '/api/user-account';
    private _baseUrlRetrieve = '/api/connectedUser';

    constructor(private _http: HttpClient){
    }

    public findAll(){
        return this._http.get<User[]>(this._baseUrl);
    }

    public findById(id: number): Observable<User> {
        return this._http.get<User>(`${this._baseUrl}/${id}`);
    }

    public create(created: NewUser){
        console.log("UserService CREATE: ", this._baseUrl, created);
        return this._http.post(this._baseUrl, created);
    }

    public update(updated: User){
        console.log("UserService UPDATED: ", updated);
        return this._http
            .put(`${this._baseUrl}/profile/${updated.id}`, updated)
    }

    public updatePwd(updated: User){
        console.log("UserService UPDATE PWD: ", updated);
        return this._http
            .put(`${this._baseUrl}/pwd/${updated.id}`, updated)
    }
  
    public findConnectedUserById(id: number): Observable<ConnectedUser> {
        return this._http.get<ConnectedUser>(`${this._baseUrlRetrieve}/${id}`);
    }

}