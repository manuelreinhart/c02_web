import { Injectable, Inject  } from '@angular/core';
import { BaseService} from "./base.service";
import { Category } from '../types/category';
import { CATEGORIES } from '../mocks/mock-categories';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService<Category> {

    constructor() {
        super();
        this.initData(CATEGORIES);
    }
}