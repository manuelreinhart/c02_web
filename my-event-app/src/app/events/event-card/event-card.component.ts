import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../types/event';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() event: Event;
  @Input() editMode: boolean;
  @Output() onLongPress = new EventEmitter();

  timeoutHandler: any;
  public selected: boolean;

  constructor() { }

  ngOnChanges() {
    if (this.editMode == false) {
      this.selected = false;
    }
  }

  ngOnInit() {
  }

  public mouseup() {
    if (this.timeoutHandler) {
      clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }
  
  public mousedown() {
    if (this.editMode)
      this.selected = !this.selected;
    this.timeoutHandler = setTimeout(() => {
      this.selected = true;
      this.onLongPress.emit();
      this.timeoutHandler = null;
    }, 500);
  }

  public editEvent() {
    
  }


}
