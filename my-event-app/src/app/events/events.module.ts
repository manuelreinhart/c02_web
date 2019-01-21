import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventSearchComponent } from './event-search/event-search.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventSearchboxComponent } from './event-searchbox/event-searchbox.component';
import { EventService } from '../services/event.service';
import { EventCardComponent } from './event-card/event-card.component'

@NgModule({
  declarations: [EventSearchComponent, EventListComponent, EventSearchboxComponent, EventCardComponent],
  exports: [EventSearchComponent, EventListComponent, EventSearchboxComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [EventService]
  

})
export class EventsModule { }
