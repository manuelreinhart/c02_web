import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../types/event';

@Component({
  selector: 'event-searchbox',
  templateUrl: './event-searchbox.component.html',
  styleUrls: ['./event-searchbox.component.scss']
})
export class EventSearchboxComponent implements OnInit {

  @Input() events: Array<Event>;

  @Output() onSearchDone = new EventEmitter<Array<Event>>();


  private name: string;
  private category: number;
  private from: Date;
  private to: Date;



  constructor() { }

  ngOnInit() {
    this.from = new Date();
    this.to = new Date(2020, 12);
  }

  search() {
    let filteredEvents = this.filter();
    this.onSearchDone.emit(filteredEvents);
  }

  filter(): Array<Event> {
    let res = new Array<Event>();
    res = this.events.filter(e => e.title.toLowerCase().includes(this.name.toLowerCase()));
    res = res.filter(e => e.categoryId == this.category);

    return res;
  }

}
