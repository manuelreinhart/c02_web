import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatFormFieldModule, MatCardModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EventsModule } from './events/events.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { CategoryModule } from './category-control/category.module';
import { LocationsComponent } from './locations/locations.component';
import { OrganizersViewComponent } from './organizers/organizers-view/organizers-view.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    EventsModule,
    CategoryModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],
  exports: [
    MatFormFieldModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    LocationsComponent,
    OrganizersViewComponent,
  ],
  entryComponents: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
