import { Injectable } from '@angular/core';
import { Category } from '../category';
import { CATEGORIES } from '../mocks/mock-categories';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private categories: Category[];
  //baseUrl: string = 'http://localhost:8080/user-portal/users';

  constructor() { 
    this.categories = CATEGORIES;
  }

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  deleteCategory(category: Category) {
    //this.categories.filter(
  }

  addCategory(category: Category) {
    this.categories.push(category);
  }

  updateCategory(category: Category) {
    //this.categories.push(category);
  }

  clear() {
    this.categories = [];
  }
}