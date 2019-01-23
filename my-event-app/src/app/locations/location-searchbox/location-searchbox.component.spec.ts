import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSearchboxComponent } from './location-searchbox.component';

describe('LocationSearchboxComponent', () => {
  let component: LocationSearchboxComponent;
  let fixture: ComponentFixture<LocationSearchboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSearchboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
