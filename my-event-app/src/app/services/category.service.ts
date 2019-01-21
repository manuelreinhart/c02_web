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

    canSaveItem(item: Category): boolean {
        for (var i=0; i<this.data.length; i++) {
            if (this.data[i].title == item.title) {
                if(this.data[i].id == item.id){
                    return true;
                }
                else {
                   return false; 
                }
            }
        }

        return true;
    }
}