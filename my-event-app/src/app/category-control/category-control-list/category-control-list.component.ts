import { Component, OnInit } from '@angular/core';
import { Category } from '../../types/category';
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
  filteredCategories: Array<Category>;

  dialogRef: MatDialogRef<CategoryControlEditComponent>;

  constructor(public categoryService: CategoryService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.categoryService.getItems()
      .subscribe(categories => this.categories = categories);
  }

  refreshList(categories: Array<Category>) {
    this.filteredCategories = categories;
  }

  addCategory(): void {

  }

  deleteCategory(category: Category): void {
    this.categoryService.deleteItem(category);
  }

  editCategory(category: Category): void {
    this.dialogRef = this.dialog.open(CategoryControlEditComponent, {      
      data: category
    });
  }


}
