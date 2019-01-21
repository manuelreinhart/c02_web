import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { Event } from '../../types/event';
import { EventCardComponent } from '../event-card/event-card.component';
import { EventService } from '../../services/event.service';

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

  constructor(private eventService: EventService) { }

  ngOnInit() {

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
    this.eventService.addItem(this.newEvent);  
    setTimeout(() => {
      let newCard = this.searchcards.last;   
      newCard.editEvent();
    }, 100);
    
  }

}
