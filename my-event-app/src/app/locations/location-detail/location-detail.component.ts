import {Component, Inject, OnInit} from '@angular/core';
import {Location} from "../../types/location";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {

  private location: Location

   constructor(private dialogRef: MatDialogRef<LocationDetailComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.location = data.location;
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
