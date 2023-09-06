import { User } from "../models/user";
import { HttpClient } from '@angular/common/http';
import { Injectable } from'@angular/core';
//import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class UserService{
//    private _baseUrl = environment.urlApi.users;
    /*private _baseUrl = "http://localhost:8080/sessions";*/
    private _baseUrl = '/api/user-account'

    constructor(private _http: HttpClient){
    }

    /*public findAll(){
        return this._http.get<User[]>(this._baseUrl);
    }

    public findById(id: string) {
        return this._http.get(`${this._baseUrl}/${id}`);
    }*/
    
    public create(created: User){
        console.log("UserService CREATE: ", this._baseUrl, created);
        return this._http.post(this._baseUrl, created);
    }

    public update(updated: User){ 
        console.log("UserService UPDATED: ", updated);
        return this._http
            .put(`${this._baseUrl}/${updated.id}`, updated)
    }

/*
    public auth(loginCred: User){
       nsole.log("auth2:",this._http.post(this._baseUrl, loginCred));
        return this._http
            .post<User>(this._baseUrl, loginCred);
    }
*/    
}