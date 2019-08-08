import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateOrganizationsComponent } from './affiliate-organizations.component';

describe('AffiliateOrganizationsComponent', () => {
  let component: AffiliateOrganizationsComponent;
  let fixture: ComponentFixture<AffiliateOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliateOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
