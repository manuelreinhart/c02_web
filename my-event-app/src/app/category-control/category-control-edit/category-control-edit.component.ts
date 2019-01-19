import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Category } from '../../types/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-control-edit',
  templateUrl: './category-control-edit.component.html',
  styleUrls: ['./category-control-edit.component.scss']
})
export class CategoryControlEditComponent {

  constructor(
    public dialogRef: MatDialogRef<CategoryControlEditComponent>,
    public categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public category: Category) { }

    close(): void {
      this.dialogRef.close(true);
    }

    save(): void {
      this.category.title = "123123";
      this.categoryService.updateItem(this.category);
      this.dialogRef.close(true);
    }
}
