import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryControlListComponent } from './category-control/category-control-list/category-control-list.component';
import { CategoryControlEditComponent } from './category-control/category-control-edit/category-control-edit.component';

const routes: Routes = [
  { path: 'category-control-list', component: CategoryControlListComponent },
  { path: 'category-control-edit', component: CategoryControlEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
