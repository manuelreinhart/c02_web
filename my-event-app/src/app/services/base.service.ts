import { Observable, of } from 'rxjs';

export class BaseService<T extends Identifyable> {

  protected data: T[];
  private maxId: number;

  constructor() {
    this.maxId = 0;
  }

  initData(items: T[]) {
    this.data = items;

    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id > this.maxId) {
        this.maxId = this.data[i].id;
      }
    }
  }

  getItems(): Observable<T[]> {
    return of(this.data);
  }

  deleteItem(item: T) {
    var idx = this.data.indexOf(item);
    if (idx != -1) {
      this.data.splice(idx, 1);
    }
  }

  addItem(item: T): T {
    item.id = ++this.maxId;
    this.data.push(item);
    return item;
  }

  updateItem(item: T) {
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id == item.id) {
        this.data[i] = item;
        break;
      }
    }
  }

  getItem(id: number): T {
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id == id) {
        return this.data[i];
      }
    }

    return null;
  }

  clear() {
    this.data = [];
  }
}
