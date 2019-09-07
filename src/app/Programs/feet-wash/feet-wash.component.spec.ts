import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeetWashComponent } from './feet-wash.component';

describe('FeetWashComponent', () => {
  let component: FeetWashComponent;
  let fixture: ComponentFixture<FeetWashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeetWashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeetWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
