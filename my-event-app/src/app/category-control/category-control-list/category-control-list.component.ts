import { Component, OnInit } from '@angular/core';
import { Category } from '../../category';
import { CategoryService } from '../../services/category.service';
import { CategoryControlEditComponent } from '../category-control-edit/category-control-edit.component';
import { MatDialog, MatDialogRef, MatDialogConfig } from "@angular/material";


@Component({
  selector: 'app-category-control-list',
  templateUrl: './category-control-list.component.html',
  styleUrls: ['./category-control-list.component.scss']
})
export class CategoryControlListComponent implements OnInit {
  categories: Category[];
  categoryService: CategoryService;
  dialogRef: MatDialogRef<CategoryControlEditComponent>;

  constructor(public dialog: MatDialog) {
    this.categoryService = new CategoryService();
  }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  addCategory(): void {

  }

  deleteCategory(category: Category): void {
    this.categoryService.deleteCategory(category);
  }

  editCategory(category: Category): void {
    this.dialogRef = this.dialog.open(CategoryControlEditComponent, {      
      data: category
    });
    //this.dialogRef = this.dialog.open(CategoryControlEditComponent);
  }


}
