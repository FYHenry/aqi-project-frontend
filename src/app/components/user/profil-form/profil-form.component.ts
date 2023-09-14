import { Component, OnInit} from '@angular/core';
import { ConnectedUser } from 'src/app/shared/models/connectedUser';
import { UpdUser } from 'src/app/shared/models/updateUser';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profil-form',
  templateUrl: './profil-form.component.html',
  styleUrls: ['./profil-form.component.css']
})

export class ProfilFormComponent implements OnInit{
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

  updateUser(){
    this.updUser.id =10;
    this._userService
      .update(this.updUser)
      .subscribe(()=> console.log("Existing User has been successfully updated"))
  }

}
