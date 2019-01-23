import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Event } from '../../types/event';
import { CategoryService } from '../../services/category.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  private event: Event

  get category(): string {
    return  this.categoryService.getItem(this.event.categoryId).title;
  }

  get location(): string {
    return this.locationService.getItem(this.event.locationId).name;
  }

  get city(): string {
    return this.locationService.getItem(this.event.locationId).city;
  }


 constructor(private dialogRef: MatDialogRef<EventDetailComponent>, private categoryService: CategoryService,
             private locationService: LocationService, @Inject(MAT_DIALOG_DATA) data: any) {
    this.event = data.event;
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();  
  }

}
