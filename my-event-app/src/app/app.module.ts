import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoryControlListComponent } from './category-control/category-control-list/category-control-list.component';
import { CategoryControlEditComponent } from './category-control/category-control-edit/category-control-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    CategoryControlListComponent,
    CategoryControlEditComponent
  ],
  entryComponents: [CategoryControlEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
