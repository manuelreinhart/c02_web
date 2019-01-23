import {Component, OnInit, Input,  Output, EventEmitter} from '@angular/core';
import {Location} from "../../types/location";
import {Category} from "../../types/category";

@Component({
  selector: 'location-searchbox',
  templateUrl: './location-searchbox.component.html',
  styleUrls: ['./location-searchbox.component.scss']
})
export class LocationSearchboxComponent implements OnInit {

  @Input() locations: Array<Location>;
  @Input() categories: Array<Category>;

  @Output() onSearchDone = new EventEmitter<Array<Location>>();


  private venue: string;
  private category = 0;
  private zipCode: string;
  private  city: string;
  private couAbb: string;

  constructor() { }

  ngOnInit() {}


  search() {
    const filteredLocations = this.filter();
    this.onSearchDone.emit(filteredLocations);
  }

  filter(): Array<Location> {
    let res = this.locations;
    if (this.venue) {
      res = res.filter(e =>
        e.name.toLowerCase().includes(this.venue.toLowerCase()) ||
        e.description.toLowerCase().includes(this.venue.toLowerCase())
      );
    }
    if (this.zipCode) {
      res = res.filter(e =>
      e.zipCode.toLowerCase().includes(this.zipCode.toLowerCase())
      );
    }
    if (this.couAbb) {
      res = res.filter(e =>
        e.countryAbb.toLowerCase().includes(this.couAbb.toLowerCase())
      );
    }
    if (this.city) {
      res = res.filter(e =>
        e.city.toLowerCase().includes(this.city.toLowerCase())
      );
    }
    if (this.category && this.category > 0) {
      res = res.filter(e => e.categoryId == this.category);
    }

    return res;
  }

}
