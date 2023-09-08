import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Address } from "../models/address";
import { tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AddressService{
    private _baseUrl = '/api/address';
    private _createdAddr: Address = {};

    constructor(private _http: HttpClient){}

    public create(usrInputAddr: Address){
    
        console.log("Address Service-create1: ", this._baseUrl);
        console.log("Address Service-create1: ", usrInputAddr);
        console.log("Address Service-create2: ", usrInputAddr.id);
        
        return this._http.post(this._baseUrl, usrInputAddr);

    }

}

/*
export class AddressService{
    private _baseUrl = '/api/address';

    constructor(private _http: HttpClient){}

    public create(created: Address){
        console.log("Address Service-create1: ", this._baseUrl);
        console.log("Address Service-create1: ", created);
        console.log("Address Service-create2: ", created.id);
        
        return this._http.post(this._baseUrl, created);
    }

    public update(updated: Address){ 
        console.log("Address Service UPDATED: ", updated);
        return this._http
            .put(`${this._baseUrl}/${updated.id}`, updated)
    }

}*/