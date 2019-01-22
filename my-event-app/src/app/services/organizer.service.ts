import { Injectable, Inject  } from '@angular/core';
import { BaseService} from './base.service';
import { Organizer } from '../types/organizer';
import { ORGANIZER } from '../mocks/mock-organizers';

@Injectable()
export class OrganizerService extends BaseService<Organizer> {

  constructor() {
    super();
    this.initData(ORGANIZER);
  }
}
