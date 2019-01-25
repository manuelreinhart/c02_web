import {Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Organizer } from '../../types/organizer';
import { OrganizerService } from '../../services/organizer.service';
import { OrganizersEditComponent } from '../organizers-edit/organizers-edit.component';
import {OrganizersSearchComponent} from '../organizers-search/organizers-search.component';

@Component({
  selector: 'app-organizers-list',
  templateUrl: './organizers-list.component.html',
  styleUrls: ['./organizers-list.component.scss']
})

export class OrganizersListComponent implements OnInit {
  organizers: Organizer[];
  filteredOrganizers: Array<Organizer>;
  editDialog: MatDialogRef<OrganizersEditComponent>;

  constructor(public organizerService: OrganizerService, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.loadDataFromSource();
  }

  loadDataFromSource(): void {
    this.organizerService.getItems()
      .subscribe(organizers => {
        this.organizers = organizers;
        this.resetSource(organizers);
      });
  }

  resetSource(organizers: Array<Organizer>): void {
    this.filteredOrganizers = organizers;
  }

  addOrganizer(): void {
    this.editDialog = this.dialog.open(OrganizersEditComponent, {
      data: {
        organizer: null,
      }
    });

    this.editDialog.afterClosed().subscribe(result => {
      this.loadDataFromSource(); // can be optimized - performance
    });
  }

  deleteOrganizer(organizer: Organizer): void {
    this.organizerService.deleteItem(organizer);
    // ToDo IMPROVEMENT
    this.loadDataFromSource();
  }

  editOrganizer(organizer: Organizer): void {
    this.editDialog = this.dialog.open(OrganizersEditComponent, {
      data: {
        organizer: organizer
      }
    });

    this.editDialog.afterClosed().subscribe(result => {
      this.loadDataFromSource();
    });
  }
}
