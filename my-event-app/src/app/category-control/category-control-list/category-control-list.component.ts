import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '../../types/category';
import { CategoryService } from '../../services/category.service';
import { CategoryControlEditComponent } from '../category-control-edit/category-control-edit.component';
import { MatDialog, MatDialogRef, MatDialogConfig } from "@angular/material";
import { CategorySearchComponent } from '../category-search/category-search.component';


@Component({
  selector: 'app-category-control-list',
  templateUrl: './category-control-list.component.html',
  styleUrls: ['./category-control-list.component.scss']
})
export class CategoryControlListComponent implements OnInit {
  categories: Category[];
  filteredCategories: Array<Category>;

  dialogRef: MatDialogRef<CategoryControlEditComponent>;

  @ViewChild('categorySearch') categorySearch: CategorySearchComponent;

  constructor(public categoryService: CategoryService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.categoryService.getItems()
      .subscribe(categories => { 
        this.categories = categories;
        this.refreshList(categories);
      });
  }

  refreshList(categories: Array<Category>) {
    this.filteredCategories = categories;
  }

  triggerRefresh() {
    this.categorySearch.search();
  }

  addCategory(): void {
    this.dialogRef = this.dialog.open(CategoryControlEditComponent, {      
      data: {
        category: null,
        categories: this.categories
      }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.triggerRefresh();
    });
  }

  deleteCategory(category: Category): void {
    this.categoryService.deleteItem(category);
    this.triggerRefresh();
  }

  editCategory(category: Category): void {
    this.dialogRef = this.dialog.open(CategoryControlEditComponent, {      
      data: {
        category: category,
        categories: this.categories
      }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.triggerRefresh();
    });
  }


}
