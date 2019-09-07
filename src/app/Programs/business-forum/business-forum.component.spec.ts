import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessForumComponent } from './business-forum.component';

describe('BusinessForumComponent', () => {
  let component: BusinessForumComponent;
  let fixture: ComponentFixture<BusinessForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
