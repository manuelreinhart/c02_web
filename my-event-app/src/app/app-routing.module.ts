import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryControlListComponent } from './category-control/category-control-list/category-control-list.component';
import { EventSearchComponent } from './events/event-search/event-search.component';
import { LocationSearchComponent } from "./locations/location-search/location-search.component";
import { OrganizersViewComponent } from './organizers/organizers-view/organizers-view.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoryControlListComponent },
  { path: 'organizers', component: OrganizersViewComponent },
  { path: 'events', component: EventSearchComponent },
  { path: 'locations', component: LocationSearchComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
