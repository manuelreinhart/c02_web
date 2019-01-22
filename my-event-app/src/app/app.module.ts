import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatFormFieldModule, MatCardModule, MatButtonModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EventsModule } from './events/events.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { CategoryModule } from './category-control/category.module';

@NgModule({
  imports: [
    BrowserModule,        
    FormsModule,
    MatDialogModule,
    EventsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    CategoryModule
  ],
  exports: [
    MatFormFieldModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
  ],
  entryComponents: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
