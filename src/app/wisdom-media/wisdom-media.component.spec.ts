import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WisdomMediaComponent } from './wisdom-media.component';

describe('WisdomMediaComponent', () => {
  let component: WisdomMediaComponent;
  let fixture: ComponentFixture<WisdomMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WisdomMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
