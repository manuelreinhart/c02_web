import {Component, OnInit, ViewChild} from '@angular/core';
import { Location} from "../../types/location";
import { LocationService} from "../../services/location.service";
import {Category} from "../../types/category";
import {CategoryService} from "../../services/category.service";
import {LocationSearchboxComponent} from "../location-searchbox/location-searchbox.component";


@Component({
  selector: 'location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit {

  @ViewChild('searchbox') searchBox: LocationSearchboxComponent;

  private locations: Array<Location>;
  private filteredLocations: Array<Location>;

  private categories: Array<Category>;

  constructor(private locationService: LocationService, private categoryService: CategoryService) {
    locationService.getItems().subscribe(locations => this.locations = locations);
    categoryService.getItems().subscribe(categories => this.categories = categories);
  }

  ngOnInit() {
    this.filteredLocations = this.locations; // todo remove
  }

  refreshList(filtered: Array<Location>) {
    this.filteredLocations = filtered;
  }
}
