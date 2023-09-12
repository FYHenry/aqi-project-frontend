import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CityForm } from "../models/cityForm";

@Injectable({
    providedIn: 'root'
})

export class CityService{
    private _baseUrl = 'http://localhost:8081/cityForm';

    constructor(private _http: HttpClient){
    }

    public findByNameLike(name: string) {
        return this._http.get<CityForm[]>(`${this._baseUrl}/${name}`);
    }

    /* NIcolas
    public findByNameLike(name: string): Observable<CityForm> {
        return this._http.get<CityForm>(`${this._baseUrl}/${name}`);
    }
    */

}
