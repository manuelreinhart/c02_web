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

  canSaveItem(item: Organizer): boolean {
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].name == item.name) {
        if (this.data[i].id == item.id) {
          return true;
        } else {
          return false;
        }
      }
    }
    return true;
  }

}
