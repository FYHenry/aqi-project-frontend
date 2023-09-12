import { User } from "../models/user";
import { HttpClient } from '@angular/common/http';
import { Injectable } from'@angular/core';
import { Observable } from "rxjs";
import { ConnectedUser } from "../models/connectedUser";
import { NewUser } from "../models/newuser";

interface HttpResponseBody {
    date: string,
    code: string,
    message: string,
    url: string
}

@Injectable({
    providedIn: 'root'
})

export class UserService{
    private _baseUrl = "http://localhost:8081/";
    private _userUrl = "user-account";

    constructor(private _http: HttpClient){
    }

    public findAll(){
        return this._http.get<User[]>(this._baseUrl+this._userUrl);
    }

    public findById(id: number): Observable<User> {
        return this._http.get<User>(`${this._baseUrl}/${id}`);
    }

    public create(created: NewUser): Observable<HttpResponseBody>{
        console.log("UserService NEW CREATE: ", this._baseUrl+this._userUrl, created);
        return this._http.post<HttpResponseBody>(this._baseUrl+this._userUrl, created);
    }

    public update(updated: User){
        console.log("UserService UPDATED: ", updated);
        return this._http
            .put(`${this._baseUrl+this._userUrl}/profile/${updated.id}`, updated)
    }

    public updatePwd(updated: User){
        console.log("UserService UPDATE PWD: ", updated);
        return this._http
            .put(`${this._baseUrl+this._userUrl}/pwd/${updated.id}`, updated)
    }

    public findConnectedUserById(id: number): Observable<ConnectedUser> {
      return this._http.get<ConnectedUser>(`${this._baseUrl}connectedUser/${id}`);
    }

}
