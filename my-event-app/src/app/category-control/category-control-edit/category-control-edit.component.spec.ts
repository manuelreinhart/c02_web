import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryControlEditComponent } from './category-control-edit.component';

describe('CategoryControlEditComponent', () => {
  let component: CategoryControlEditComponent;
  let fixture: ComponentFixture<CategoryControlEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryControlEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryControlEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
