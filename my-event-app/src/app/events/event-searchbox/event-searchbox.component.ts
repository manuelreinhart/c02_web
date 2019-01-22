import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../types/event';
import { Category } from '../../types/category';

@Component({
  selector: 'event-searchbox',
  templateUrl: './event-searchbox.component.html',
  styleUrls: ['./event-searchbox.component.scss']
})
export class EventSearchboxComponent implements OnInit {

  @Input() events: Array<Event>;
  @Input() categories: Array<Category>;

  @Output() onSearchDone = new EventEmitter<Array<Event>>();


  private name: string;
  private category = 0;
  private from: Date;
  private to: Date;
  
  constructor() { }

  ngOnInit() {
    this.from = new Date();
    this.to = new Date(2020, 12);
  }

  search() {
    const filteredEvents = this.filter();
    this.onSearchDone.emit(filteredEvents);
  }

  filter(): Array<Event> {
    let res = this.events;
    if (this.name) {
        res = res.filter(e =>
        e.title.toLowerCase().includes(this.name.toLowerCase()) ||
        e.description.toLowerCase().includes(this.name.toLowerCase())
      );
    }

    if (this.category && this.category > 0) {
      res = res.filter(e => e.categoryId == this.category);
    }

    return res;
  }

}
