import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenConventionComponent } from './women-convention.component';

describe('WomenConventionComponent', () => {
  let component: WomenConventionComponent;
  let fixture: ComponentFixture<WomenConventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenConventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenConventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
