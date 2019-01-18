import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryControlListComponent } from './category-control/category-control-list/category-control-list.component';
import { CategoryControlEditComponent } from './category-control/category-control-edit/category-control-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoryControlListComponent },
  { path: 'categoryedit', component: CategoryControlEditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
