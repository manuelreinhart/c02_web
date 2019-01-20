import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class BaseService<T extends Identifyable> {

  private data: T[];
  private maxId: number;

  constructor() {
    this.maxId = 0;
  }

  initData(items : T[]) {
    this.data = items;

    for(var i in this.data) {
      if(this.data[i].id > this.maxId) {
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

  addItem(item: T) {
    item.id = ++this.maxId;
    this.data.push(item);
  }

  updateItem(item: T) {
    for (var i in this.data) {
      if (this.data[i].id == item.id) {        
        this.data[i] = item;    
        break;
      }
    }
  }

  clear() {
    this.data = [];
  }
}