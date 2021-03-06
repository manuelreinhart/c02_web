import { Injectable, Inject  } from '@angular/core';
import { BaseService} from './base.service';
import { Event } from '../types/event';
import { EVENTS } from '../mocks/mock-events';

/*@Injectable({
  providedIn: 'root',
})*/
@Injectable()
export class EventService extends BaseService<Event> {

    constructor() {
        super();
        this.initData(EVENTS);
    }
}
