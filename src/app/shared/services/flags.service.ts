
import { Injectable } from'@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FlagsService{
  private _signinDisplay = false;

  public get signinDisplay(): boolean{
    return this._signinDisplay;
  }

  public switchSigninDisplay(): void{
    this._signinDisplay = !this._signinDisplay;
  }
}