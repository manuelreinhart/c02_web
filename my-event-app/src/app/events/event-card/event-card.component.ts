import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../types/event';
import { CategoryService } from '../../services/category.service';

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
  public isEdit: boolean; 
  public category: string;

  constructor(private categoryService: CategoryService) {  
  }

  ngOnChanges() {
    if (this.editMode == false) {
      this.selected = false;      
    }
    if (this.editMode == true){
      this.isEdit = false;
    }
  }

  ngOnInit() {
    //this.category = this.categoryService.getItems().

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
    console.log("edit");
    this.isEdit = true;
  }
  public saveEvent() {
    this.isEdit = false;
  }


}
