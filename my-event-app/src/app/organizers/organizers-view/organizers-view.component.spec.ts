import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizersViewComponent } from './organizers-view.component';

describe('OrganizersViewComponent', () => {
  let component: OrganizersViewComponent;
  let fixture: ComponentFixture<OrganizersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
