import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.scss']
})
export class CategorySearchComponent implements OnInit {

  private name = '';

  @Input() categories: Array<Category>;
  @Output() onSearchDone = new EventEmitter<Array<Category>>();

  constructor(public categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  public search() {
    const nameLowerCase = this.name.toLowerCase();
    const filtered = this.categories.filter(c => (c.title != null && c.title.toLowerCase().includes(nameLowerCase)) ||
      (c.description != null && c.description.toLowerCase().includes(nameLowerCase)));

    this.onSearchDone.emit(filtered);
  }
}
