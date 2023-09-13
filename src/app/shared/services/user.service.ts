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
    private _userUrl = "user-account";
    private _baseUrl = "/api/";

    constructor(private _http: HttpClient){
    }

    public findAll(){
        return this._http.get<User[]>(this._baseUrl+this._userUrl);
    }

    public findById(id: number): Observable<User> {
        return this._http.get<User>(`${this._baseUrl+this._userUrl}/${id}`);
    }

    /* create new user account */
    public create(created: NewUser): Observable<HttpResponseBody>{
        return this._http.post<HttpResponseBody>(this._baseUrl+this._userUrl, created);
    }

    /* update existing user profile */
    public update(updated: User){
        return this._http
            .put(`${this._baseUrl+this._userUrl}/profile/${updated.id}`, updated)
    }

    /* update existing user password */
    public updatePwd(updated: User){
        return this._http
            .put(`${this._baseUrl+this._userUrl}/pwd/${updated.id}`, updated)
    }

    /* get details of user currently connected */
    public findConnectedUserById(id: number): Observable<ConnectedUser> {
      return this._http.get<ConnectedUser>(`${this._baseUrl}connectedUser/${id}`);
    }

}
