import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Category } from '../../category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-control-edit',
  templateUrl: './category-control-edit.component.html',
  styleUrls: ['./category-control-edit.component.scss']
})
export class CategoryControlEditComponent {

/*  constructor(
    public dialogRef: MatDialogRef<CategoryControlEditComponent>,
    @Inject(MAT_DIALOG_DATA) public categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public category: Category) { }

  close(): void {

  }

  save(): void {

  }*/

}
