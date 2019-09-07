import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTestimonyComponent } from './share-testimony.component';

describe('ShareTestimonyComponent', () => {
  let component: ShareTestimonyComponent;
  let fixture: ComponentFixture<ShareTestimonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareTestimonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareTestimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
