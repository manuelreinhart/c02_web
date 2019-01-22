import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { Event } from '../../types/event';
import { EventCardComponent } from '../event-card/event-card.component';
import { EventService } from '../../services/event.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EventDetailComponent } from '../event-detail/event-detail.component';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  @Input() events: Array<Event>;

  @ViewChildren('searchcard') searchcards: QueryList<EventCardComponent>;

  private editMode: boolean;

  private newEvent: Event;

  private detailDialog: MatDialogRef<EventDetailComponent>;

  constructor(private eventService: EventService, private dialog: MatDialog) { }

  ngOnInit() {
    
  }

  showDetail(event) {
    console.log(event);
    this.detailDialog = this.dialog.open(EventDetailComponent, { 
      data: {
        event: event
      }
    });
  }

  activateEditMode() {
    this.editMode = true;
  }

  deleteSelected() {
    this.searchcards.forEach(c => {
      if (c.selected)
        this.eventService.deleteItem(c.event);
    });    
    this.editMode = false;
  }

  addEvent() {
    this.newEvent = new Event();   
    this.newEvent.title = "New Event";
    this.newEvent.description = "Fill in description here";
    this.newEvent.categoryId = 1;
    this.newEvent.locationId = 1;
    this.newEvent.organizerId = 1;
    this.newEvent.startDate = new Date();
    this.newEvent.endDate = new Date();
    this.editMode = false;    
    this.saveNewEvent();

  }
  saveNewEvent() {
    this.newEvent = this.eventService.addItem(this.newEvent);  
    setTimeout(() => {
      let newCard = this.searchcards.find(c => c.event.id == this.newEvent.id);   
      newCard.editEvent();
    }, 100); 
  }

}
