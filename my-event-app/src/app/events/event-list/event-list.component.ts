import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../types/event';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  @Input() events: Event;

  constructor() { }

  ngOnInit() {
  }

}
