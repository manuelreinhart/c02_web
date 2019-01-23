import { Injectable } from '@angular/core';
import { BaseService} from './base.service';
import { Location } from '../types/location';
import { LOCATION} from '../mocks/mock-locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends BaseService<Location> {

  constructor() {
    super();
    this.initData(LOCATION);
  }
}
