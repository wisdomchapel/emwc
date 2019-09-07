import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupleDinnerComponent } from './couple-dinner.component';

describe('CoupleDinnerComponent', () => {
  let component: CoupleDinnerComponent;
  let fixture: ComponentFixture<CoupleDinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupleDinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupleDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
