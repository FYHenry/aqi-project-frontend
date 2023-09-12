import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FlagsService } from 'src/app/shared/services/flags.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})

export class SigninFormComponent {

  user: User ={};
  constructor(private _authService: AuthService, private _flagsService: FlagsService) {}

  login(){
    this._authService
      .auth(this.user)
      .subscribe(() => {console.log("User is logged in")});
  }
  
  public change(): void{
    this._flagsService.switchSigninDisplay();
    console.log(`The flag becomes ${this._flagsService.signinDisplay}.`);
  }

}
