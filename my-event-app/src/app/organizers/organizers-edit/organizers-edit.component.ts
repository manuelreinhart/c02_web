import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Organizer } from '../../types/organizer';
import { OrganizerService } from '../../services/organizer.service';

@Component({
  selector: 'app-organizers-edit',
  templateUrl: './organizers-edit.component.html',
  styleUrls: ['./organizers-edit.component.scss']
})

export class OrganizersEditComponent {

  private hasErrors: boolean;
  private prevOrganizer: Organizer;
  private organizer: Organizer;

  constructor(public dialogRef: MatDialogRef<OrganizersEditComponent>,
              public corganizerService: OrganizerService,
              @Inject(MAT_DIALOG_DATA) data: any) {

    this.prevOrganizer = data.organizer;
    this.organizer = {...data.organizer};
  }
  
  save(): void {
    if (!this.corganizerService.canSaveItem(this.organizer)) {
      this.hasErrors = true;
      return;
    }

    if (this.prevOrganizer == null) {
      this.corganizerService.addItem(this.organizer);
    } else {
      this.corganizerService.updateItem(this.organizer);
    }

    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
