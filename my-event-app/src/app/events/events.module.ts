import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventSearchComponent } from './event-search/event-search.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventSearchboxComponent } from './event-searchbox/event-searchbox.component';
import { EventService } from '../services/event.service';
import { EventCardComponent } from './event-card/event-card.component';
import { EventDetailComponent } from './event-detail/event-detail.component'
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [EventSearchComponent, EventListComponent, EventSearchboxComponent, EventCardComponent, EventDetailComponent],
  exports: [EventSearchComponent, EventListComponent, EventSearchboxComponent, EventDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule

  ],
  providers: [EventService],
  entryComponents: [EventDetailComponent]  

})
export class EventsModule { }
