import { Component } from '@angular/core';
import { FlagsService } from 'src/app/shared/services/flags.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private _flagsService: FlagsService){
  }
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

  public change(): void{
    this._flagsService.switchSigninDisplay();
    console.log(`The flag becomes ${this._flagsService.signinDisplay}.`);
  }

  public get flag(): boolean{
    return this._flagsService.signinDisplay;
  }
}
