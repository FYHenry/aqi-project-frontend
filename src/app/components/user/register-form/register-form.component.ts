import { Component} from '@angular/core';
import { NewUser } from 'src/app/shared/models/newuser';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent{
  
  newUser: NewUser={};
  constructor(private _userService: UserService) {}

  createUser(){
    this._userService
      .create(this.newUser)
      .subscribe(()=> console.log("User successfully created"))
  }
}
