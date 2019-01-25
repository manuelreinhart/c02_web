import {Component, OnInit, Inject, ViewChild} from '@angular/core';
import {OrganizersSearchComponent} from '../organizers-search/organizers-search.component';
import {OrganizerService} from '../../services/organizer.service';
import {Organizer} from '../../types/organizer';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers-view.component.html',
  styleUrls: ['./organizers-view.component.scss']
})

export class OrganizersViewComponent implements OnInit {

  organizers: Organizer[];
  @ViewChild('organizersSearch') organizersSearch: OrganizersSearchComponent;

  constructor(public organizerService: OrganizerService) {
    this.loadDataFromSource();
  }

  ngOnInit() {
  }

  loadDataFromSource(): void {
    this.organizerService.getItems()
      .subscribe(organizers => {
        this.organizers = organizers;
      });
  }

  public refresh(): void {
    this.organizersSearch.search();
  }

}
