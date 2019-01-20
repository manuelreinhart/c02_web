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
    let filtered = this.categories.filter(c => c.title.toLowerCase().includes(this.name.toLowerCase()) ||
    c.description.toLowerCase().includes(this.name.toLowerCase()));

    this.onSearchDone.emit(filtered);
  }

}
