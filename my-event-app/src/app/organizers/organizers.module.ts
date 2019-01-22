import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatDialogModule, MatNativeDateModule } from '@angular/material';

import { OrganizersViewComponent } from './organizers-view/organizers-view.component';
// import { CategoryService } from '../services/category.service';

@NgModule({
  declarations: [
    OrganizersViewComponent
    ],
  exports: [
    OrganizersViewComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [

  ],
  entryComponents: [

    ]
})
export class OrganizersModule { }
