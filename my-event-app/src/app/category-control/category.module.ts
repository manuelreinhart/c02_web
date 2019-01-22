import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { CategoryControlListComponent } from './category-control-list/category-control-list.component';
import { CategoryControlEditComponent } from './category-control-edit/category-control-edit.component';
import { CategorySearchComponent } from './category-search/category-search.component';
import { CategoryService } from '../services/category.service';

@NgModule({
  declarations: [
      CategoryControlListComponent,
      CategoryControlEditComponent,
      CategorySearchComponent],
  exports: [
      CategoryControlListComponent,
      CategoryControlEditComponent,
      CategorySearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [CategoryService],
  entryComponents: [CategorySearchComponent, CategoryControlEditComponent]
})
export class CategoryModule { }
