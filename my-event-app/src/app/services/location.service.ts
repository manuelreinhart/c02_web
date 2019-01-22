import { Injectable } from '@angular/core';
import { BaseService} from './base.service';
import { LOCATION} from '../mocks/mock-locations';
import { Location } from '../types/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends BaseService<Location>{

  constructor() {
    super();
    this.initData(LOCATION);
  }
}
