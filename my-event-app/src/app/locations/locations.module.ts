import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { LocationSearchComponent } from "./location-search/location-search.component";
import { LocationListComponent } from './location-list/location-list.component';
import { LocationSearchboxComponent } from './location-searchbox/location-searchbox.component';
import { LocationService } from "../services/location.service";
import { LocationCardComponent } from './location-card/location-card.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { MatDatepickerModule, MatDialogModule, MatNativeDateModule } from "@angular/material";


@NgModule({
  declarations: [
    LocationSearchComponent,
    LocationListComponent,
    LocationSearchboxComponent,
    LocationCardComponent,
    LocationDetailComponent
  ],
  exports: [
    LocationSearchComponent,
    LocationListComponent,
    LocationSearchboxComponent,
    LocationDetailComponent,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    LocationService
  ],
  entryComponents: [
    LocationDetailComponent
  ]
})
export class LocationsModule { }
