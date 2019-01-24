import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatDialogModule, MatNativeDateModule } from '@angular/material';

import { OrganizerService } from '../services/organizer.service';
import { OrganizersViewComponent } from './organizers-view/organizers-view.component';
import { OrganizersSearchComponent } from './organizers-search/organizers-search.component';
import { OrganizersListComponent } from './organizers-list/organizers-list.component';
import { OrganizersEditComponent } from './organizers-edit/organizers-edit.component';

@NgModule({
  declarations: [
    OrganizersViewComponent,
    OrganizersSearchComponent,
    OrganizersListComponent,
    OrganizersEditComponent
    ],
  exports: [
    OrganizersViewComponent,
    OrganizersSearchComponent,
    OrganizersListComponent,
    OrganizersEditComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    OrganizerService
  ],
  entryComponents: [
    OrganizersSearchComponent, OrganizersEditComponent
    ]
})
export class OrganizersModule { }
