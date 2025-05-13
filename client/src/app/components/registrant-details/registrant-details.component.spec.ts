import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrantDetailsComponent } from './registrant-details.component';

describe('RegistrantDetailsComponent', () => {
  let component: RegistrantDetailsComponent;
  let fixture: ComponentFixture<RegistrantDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrantDetailsComponent]
    });
    fixture = TestBed.createComponent(RegistrantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
