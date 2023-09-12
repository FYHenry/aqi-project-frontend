import { HttpClient } from '@angular/common/http';
import { Injectable } from'@angular/core';
import { Observable } from "rxjs";
import { Aqi } from '../models/aqi';

@Injectable({
    providedIn: 'root'
})

export class AqiService{
    private _baseUrl = "https://api.waqi.info/feed/";
    private _waqiToken = "3287ab1c8807044f49dfe0164eda3dae042fb419";
    constructor(private _http: HttpClient){
    }


    public findAqiByLatLng(lat: number, lng: number) {
      return this._http.get(`${this._baseUrl}geo:${lat};${lng}/?token=${this._waqiToken}`)
    }
}
