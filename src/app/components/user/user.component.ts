import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent{

  selected!: User;
  user: User ={};


}
