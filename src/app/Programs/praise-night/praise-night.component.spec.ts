import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraiseNightComponent } from './praise-night.component';

describe('PraiseNightComponent', () => {
  let component: PraiseNightComponent;
  let fixture: ComponentFixture<PraiseNightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraiseNightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraiseNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
