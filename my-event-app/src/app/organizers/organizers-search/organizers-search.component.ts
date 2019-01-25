import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Organizer } from '../../types/organizer';
import { OrganizerService } from '../../services/organizer.service';

@Component({
  selector: 'app-organizers-search',
  templateUrl: './organizers-search.component.html',
  styleUrls: ['./organizers-search.component.scss']
})

export class OrganizersSearchComponent implements OnInit {
  private organizerName = '';
  private city = '';

  @Input() organizers: Array<Organizer>;
  @Output() onSearchDone = new EventEmitter<Array<Organizer>>();

  constructor(public organizerService: OrganizerService) {

  }

  ngOnInit() {
  }

  public search(): void {
    const organizerNameLowerCase = this.organizerName.toLowerCase();
    const cityLowerCase = this.city.toLowerCase();

    const filtered = this.organizers.filter(
      item => (item.name != null && item.name.toLowerCase().includes(organizerNameLowerCase)) &&
        (item.city != null && item.city.toLowerCase().includes(cityLowerCase)));

    this.onSearchDone.emit(filtered);
  }
}
