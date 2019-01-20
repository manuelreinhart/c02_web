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

  @Input() events: Event;

  @ViewChildren('searchcard') searchcards: QueryList<EventCardComponent>;

  private editMode: boolean;

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
  }

}
