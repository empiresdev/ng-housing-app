import { Component, Injectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<section>
  <form>
    <input type="text" placeholder="Filter by city">
    <button class="primary" type="button">Search</button>
  </form>
</section>
<section class="results">
  <app-housing-location *ngFor="let housLoc of housingLocationList" [housingLocation]="housLoc"></app-housing-location>
</section>
`,
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, HousingLocationComponent]
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor(housingService: HousingService) {
    this.housingService.getAllHousingLocations()
      .then(
        (housingLocationList: HousingLocation[]) => this.housingLocationList = housingLocationList
      );
  }
}
