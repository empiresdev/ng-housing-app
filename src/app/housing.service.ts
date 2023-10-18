import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    return this.fetchHousingLocationList();
  }

  async findHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    return (await this.fetchHousingLocationList()).find(housingLocation => housingLocation.id === id);
  }

  async fetchHousingLocationList(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  submitApplication(
    firstName: string,
    lastName: string,
    email: string,
  ){
  }
}
