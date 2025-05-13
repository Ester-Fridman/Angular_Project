import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrantListComponent } from './registrant-list.component';

describe('RegistrantListComponent', () => {
  let component: RegistrantListComponent;
  let fixture: ComponentFixture<RegistrantListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrantListComponent]
    });
    fixture = TestBed.createComponent(RegistrantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
