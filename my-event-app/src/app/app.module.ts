import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatFormFieldModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule  } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoryControlListComponent } from './category-control/category-control-list/category-control-list.component';
import { CategoryControlEditComponent } from './category-control/category-control-edit/category-control-edit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CategorySearchComponent } from './category-control/category-search/category-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,    
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    MatFormFieldModule
  ],
  declarations: [
    AppComponent,
    CategoryControlListComponent,
    CategoryControlEditComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    CategorySearchComponent
  ],
  entryComponents: [CategoryControlEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
