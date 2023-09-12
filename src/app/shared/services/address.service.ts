import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Address } from "../models/address";

@Injectable({
    providedIn: 'root'
})

export class AddressService{
    private _baseUrl = 'http://localhost:8081/cityForm';
    private _createdAddr: Address = {};

    constructor(private _http: HttpClient){}

    public create(usrInputAddr: Address){

        console.log("Address Service-create1: ", this._baseUrl);
        console.log("Address Service-create1: ", usrInputAddr);
        console.log("Address Service-create2: ", usrInputAddr.id);

        return this._http.post(this._baseUrl, usrInputAddr);

    }

}


