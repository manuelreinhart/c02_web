import {Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Location } from "../../types/location";

@Component({
  selector: 'location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {

  @Input() location: Location;
  @Input() editMode: boolean;
  @Output() onLongPress = new EventEmitter();

  timeoutHandler: any;
  public selected: boolean;
  public isEdit: boolean;

  constructor() {};

  ngOnChanges() {
    if (this.editMode == false) {
      this.selected = false;
    }
    if (this.editMode == true){
      this.isEdit = false;
    }
  }

  ngOnInit() {}

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

  public editLocation() {
    console.log("edit");
    this.isEdit = true;
  }
  public saveLocation() {
    this.isEdit = false;
  }


}
