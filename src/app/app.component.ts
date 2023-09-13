import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'aqi-project-frontend';

  private _baseUrl = "/api/";

  constructor(private _http: HttpClient){
  }

  ngOnInit(){
    this._http.post(this._baseUrl, {}).subscribe();
  }
}

