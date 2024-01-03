import { Component, Input } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../models/housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: HousingLocation = {
    id: 1,
    name: 'Test Home 2',
    city: 'Contagem',
    state: 'MG',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };

  houseData: HousingLocation[] = [
    {
      id: 1,
      name: 'Test Home 1',
      city: 'Contagem',
      state: 'MG',
      photo: `${this.baseUrl}/example-house.jgp`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },

    {
      id: 2,
      name: 'Test Home 2',
      city: 'Belo Horizonte',
      state: 'MG',
      photo: `${this.baseUrl}/example-house.jgp`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },

    {
      id: 3,
      name: 'Test Home 3',
      city: 'Uberlândia',
      state: 'MG',
      photo: `${this.baseUrl}/example-house.jgp`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
  ];
}
