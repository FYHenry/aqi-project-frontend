import {  Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ConnectedUser } from 'src/app/shared/models/connectedUser';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit  {

  user!: ConnectedUser;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const map = L.map('map').setView([43.4637, 2.1450], 7);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    this.createHomeMarker().addTo(map)
  }

  createHomeMarker() {
    return L.marker([43.4637, 2.1450]);
  }

}
