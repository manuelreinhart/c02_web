import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Location} from "../../types/location";
import {Category} from "../../types/category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-location-card',
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
  public categories: Array<Category>

  get category(): string {
    return  this.categoryService.getItem(this.location.categoryId).title;
  }

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
    this.categoryService.getItem(this.location.categoryId).title;
    this.categoryService.getItems().subscribe(items => this.categories = items);
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

  public editLocation() {
    console.log("edit");
    this.isEdit = true;
  }
  public saveLocation() {
    this.isEdit = false;
  }


}
