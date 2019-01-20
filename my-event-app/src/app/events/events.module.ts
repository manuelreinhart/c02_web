import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventSearchComponent } from './event-search/event-search.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventSearchboxComponent } from './event-searchbox/event-searchbox.component';
import { EventService } from '../services/event.service'

@NgModule({
  declarations: [EventSearchComponent, EventListComponent, EventEditComponent, EventSearchboxComponent],
  exports: [EventSearchComponent, EventListComponent, EventEditComponent, EventSearchboxComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [EventService]
  

})
export class EventsModule { }
