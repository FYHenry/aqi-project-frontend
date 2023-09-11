import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menu = false
  private _signinDisplay = false;

  menuClick() {
    this.menu = !this.menu;
  }
  
  signinClick(){
    this._signinDisplay = !this._signinDisplay;
  }

  public get signinDisplay():boolean{
    return this._signinDisplay;
  }
}
