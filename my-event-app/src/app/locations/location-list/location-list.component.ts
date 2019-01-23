import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Location} from "../../types/location";
import {LocationCardComponent} from "../location-card/location-card.component";
import {LocationService} from "../../services/location.service";
import {MatDialog, MatDialogRef} from "@angular/material";
import {LocationDetailComponent} from "../location-detail/location-detail.component";


@Component({
  selector: 'location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  @Input() locations: Array<Location>;

  @ViewChildren('searchcard') searchcards: QueryList<LocationCardComponent>;

  private editMode: boolean;

  private newLocation: Location;

  private detailDialog: MatDialogRef<LocationDetailComponent>;

  constructor(private locationService: LocationService, private dialog: MatDialog) { }

  ngOnInit() {

  }

  showDetail(location) {
    if (this.editMode || this.searchcards.some(cs => cs.isEdit)) {
      return;
    }

    this.detailDialog = this.dialog.open(LocationDetailComponent, {
      data: {
        location: location
      }
    });
  }

  activateEditMode() {
    this.editMode = true;
  }

  deleteSelected() {
    this.searchcards.forEach(c => {
      if (c.selected) {
        this.locationService.deleteItem(c.location);
      }
    });
    this.editMode = false;
  }

  addLocation() {
    this.newLocation = new Location();
    this.newLocation.name = 'Neuer Veranstaltungsort';
    this.newLocation.description = 'Beschreibung einfügen';
    this.newLocation.address = 'Adresse eingeben';
    this.newLocation.zipCode = 'Postleitzahl';
    this.newLocation.city = 'Ort';
    this.newLocation.countryAbb = 'Länderkürzel';
    this.editMode = false;
    this.saveNewLocation();
  }
  saveNewLocation() {
    this.newLocation = this.locationService.addItem(this.newLocation);
    setTimeout(() => {
      const newCard = this.searchcards.find(c => c.location.id == this.newLocation.id);
      newCard.editLocation();
    }, 100);
  }

}
