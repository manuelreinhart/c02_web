import { Time } from '@angular/common';

export class Event implements Identifyable {
    id: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    categoryId: number;
    organizerId: number;
    locationId: number;

    constructor() {
      this.title = '';
      this.description = '';
      this.categoryId = -1;
      this.organizerId = -1;
      this.locationId = -1;
    }
  }
