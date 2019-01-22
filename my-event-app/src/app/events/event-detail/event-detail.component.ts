import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Event } from '../../types/event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  private event: Event

  constructor(private dialogRef: MatDialogRef<EventDetailComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.event = data.event;
  }

  ngOnInit() {
  }

  closeDialog() {
    
  }

}
