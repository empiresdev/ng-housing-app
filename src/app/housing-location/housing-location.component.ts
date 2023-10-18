import { HousingLocation } from './../housing-location';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state | uppercase}}</p>
      <a [routerLink]="['/details', housingLocation.id]">See more</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.scss']
})
export class HousingLocationComponent {
  @Input()
  housingLocation!: HousingLocation;
}
