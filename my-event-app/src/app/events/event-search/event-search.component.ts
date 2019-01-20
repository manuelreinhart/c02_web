import { Component, OnInit, ViewChild } from '@angular/core';
import { Event } from '../../types/event';
import { EventService } from '../../services/event.service';
import { EventSearchboxComponent } from '../event-searchbox/event-searchbox.component';
import { AlertPromise } from 'selenium-webdriver';


@Component({
  selector: 'event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.scss']
})
export class EventSearchComponent implements OnInit {

  @ViewChild('searchbox') searchBox: EventSearchboxComponent;

  private events: Array<Event>;
  private filteredEvents: Array<Event>;

  constructor(private eventService: EventService) {
    eventService.getItems().subscribe(events => this.events = events);
  }

  ngOnInit() {
    //this.filteredEvents = this.events;
   
  }

  refreshList(filtered: Array<Event>) {
    this.filteredEvents = filtered;
  }


}
