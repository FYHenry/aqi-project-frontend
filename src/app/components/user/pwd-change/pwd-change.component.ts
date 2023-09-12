import { Component, OnInit } from '@angular/core';
import { ConnectedUser } from 'src/app/shared/models/connectedUser';
import { UpdUser } from 'src/app/shared/models/updateUser';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-pwd-change',
  templateUrl: './pwd-change.component.html',
  styleUrls: ['./pwd-change.component.css']
})
export class PwdChangeComponent implements OnInit{
    updUser: UpdUser = {};
    user!: ConnectedUser;
  
    constructor(private _userService: UserService) {}
  
    ngOnInit(): void {
      this.getConnectedUser();
    }
  
    getConnectedUser() {
      this._userService.findConnectedUserById(10)
      .subscribe(user => {
          return this.user = user;
      });
    }
  
    updatePwd(){
      this.updUser.id =10;
      this._userService
        .updatePwd(this.updUser)
        .subscribe(()=> console.log("Password has been successfully updated"))
    }
  
  }
