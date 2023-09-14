import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Address } from "../models/address";

@Injectable({
    providedIn: 'root'
})

export class AddressService{
    private _baseUrl = '/api/cityForm';

    constructor(private _http: HttpClient){}

    public create(usrInputAddr: Address){
        return this._http.post(this._baseUrl, usrInputAddr);

    }

}


