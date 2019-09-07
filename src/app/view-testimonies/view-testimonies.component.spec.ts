import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestimoniesComponent } from './view-testimonies.component';

describe('ViewTestimoniesComponent', () => {
  let component: ViewTestimoniesComponent;
  let fixture: ComponentFixture<ViewTestimoniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTestimoniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTestimoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
