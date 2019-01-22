import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatFormFieldModule, MatCardModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EventsModule } from './events/events.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoryControlListComponent } from './category-control/category-control-list/category-control-list.component';
import { CategoryControlEditComponent } from './category-control/category-control-edit/category-control-edit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { CategorySearchComponent } from './category-control/category-search/category-search.component';

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
    AppRoutingModule
  ],
  exports: [
    MatFormFieldModule
  ],
  declarations: [
    AppComponent,
    CategoryControlListComponent,
    CategoryControlEditComponent,
    SidebarComponent,
    HomeComponent,
    CategorySearchComponent
  ],
  entryComponents: [CategoryControlEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
