import { Component, OnInit, ViewChild } from '@angular/core';
import { Event } from '../../types/event';
import { EventService } from '../../services/event.service';
import { EventSearchboxComponent } from '../event-searchbox/event-searchbox.component';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category';

@Component({
  selector: 'event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.scss']
})
export class EventSearchComponent implements OnInit {

  @ViewChild('searchbox') searchBox: EventSearchboxComponent;

  private events: Array<Event>;
  private filteredEvents: Array<Event>;

  private categories: Array<Category>;

  constructor(private eventService: EventService, private categoryService: CategoryService) {
    eventService.getItems().subscribe(events => this.events = events);
    categoryService.getItems().subscribe(categories => this.categories = categories);
  }

  ngOnInit() {
    this.filteredEvents = this.events; // todo remove
  }

  refreshList(filtered: Array<Event>) {
    this.filteredEvents = filtered;
  }
}
