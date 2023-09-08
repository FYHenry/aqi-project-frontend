import { Component, OnInit } from '@angular/core';
import { ConnectedUser } from 'src/app/shared/models/connectedUser';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  user!: ConnectedUser;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.getConnectedUser()
  }

  getConnectedUser() {
    this.userService.findConnectedUserById(1)
    .subscribe(user => {
        return this.user = user;
    });
  }
}
