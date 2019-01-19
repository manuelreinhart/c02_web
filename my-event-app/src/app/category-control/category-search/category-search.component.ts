import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.scss']
})
export class CategorySearchComponent implements OnInit {

  private name;

  constructor(public categoryService: CategoryService) { 


  }

  ngOnInit() {
  }

  public search() {

  }

}
