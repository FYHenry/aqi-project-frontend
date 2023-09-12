import { Component, OnInit } from '@angular/core';
import { ConnectedUser } from 'src/app/shared/models/connectedUser';
import { AqiService } from 'src/app/shared/services/aqi.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  user!: ConnectedUser;
  homeAqi!: any;

  constructor(private userService: UserService, private aqiService: AqiService) { }

  ngOnInit(): void {
      this.getConnectedUser()
      console.log(this.user)
  }

  getConnectedUser() {
    this.userService.findConnectedUserById(1)
    .subscribe(user => {
      this.user = user,
      this.getAqiHome(user)
    });
  }

  getAqiHome(user: ConnectedUser) {
    this.aqiService.findAqiByLatLng(user.cityLat, user.cityLong)
    .subscribe(homeAqi => {
      this.homeAqi = homeAqi
    })
  }



}
