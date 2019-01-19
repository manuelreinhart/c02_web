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

  private data: Category;
  private category: Category;
  private categories: Category[];

  constructor(
    public dialogRef: MatDialogRef<CategoryControlEditComponent>,
    public categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) data: Category) { 
      this.category = { ...data };

      this.categoryService.getItems()
        .subscribe(categories => this.categories = categories);
    }

    close(): void {
      this.dialogRef.close(true);
    }

    save(): void {
      this.categoryService.updateItem(this.category);
      this.dialogRef.close(true);
    }
}