import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizersSearchComponent } from './organizers-search.component';

describe('OrganizersSearchComponent', () => {
  let component: OrganizersSearchComponent;
  let fixture: ComponentFixture<OrganizersSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizersSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
