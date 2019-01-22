import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationSearchComponent } from "./location-search/location-search.component";
import { LocationListComponent } from './location-list/location-list.component';
import { LocationEditComponent } from './location-edit/location-edit.component';

@NgModule({
  declarations: [
    LocationSearchComponent,
    LocationListComponent,
    LocationEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LocationsModule { }
