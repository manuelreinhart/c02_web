import { Time } from "@angular/common";

export class Event implements Identifyable {
    id: number;
    title: string;
    description: string;
    startDate: Date;
    startTime: Time;
    endDate: Date;
    endTime: Time;
    schedule: string;
    categoryId: number;
    organizerId: number;
    locationId: number;
  }