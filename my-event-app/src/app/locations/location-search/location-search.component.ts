import { Component, OnInit } from '@angular/core';
import { Location} from "../../types/location";
import { LocationService} from "../../services/location.service";


@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit {

  private locations: Array<Location>;
  private filteredLocation: Array<Location>

  constructor(private locationService: LocationService) {
    locationService.getItems().subscribe( locations => this.locations = locations );
  }

  ngOnInit() {
    this.filteredLocation = this.locations;
  }

  refreshList(filtered: Array<Location>) {
    this.filteredLocation = filtered;
  }

}
