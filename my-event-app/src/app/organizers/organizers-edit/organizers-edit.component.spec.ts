import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizersEditComponent } from './organizers-edit.component';

describe('OrganizersEditComponent', () => {
  let component: OrganizersEditComponent;
  let fixture: ComponentFixture<OrganizersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
