import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryControlListComponent } from './category-control-list.component';

describe('CategoryControlComponent', () => {
  let component: CategoryControlListComponent;
  let fixture: ComponentFixture<CategoryControlListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryControlListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryControlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
