import {Component, OnInit, ViewChild} from '@angular/core';
import { Location} from "../../types/location";
import { LocationService} from "../../services/location.service";
import {LocationSearchboxComponent} from "../location-searchbox/location-searchbox.component";


@Component({
  selector: 'location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit {

  @ViewChild('searchbox') searchbox: LocationSearchboxComponent;

  private locations: Array<Location>;
  private filteredLocations: Array<Location>;


  constructor(private locationService: LocationService) {
    locationService.getItems().subscribe(locations => this.locations = locations);
  }

  ngOnInit() {
    this.filteredLocations = this.locations; // todo remove
  }

  refreshList(filtered: Array<Location>) {
    this.filteredLocations = filtered;
  }
}
