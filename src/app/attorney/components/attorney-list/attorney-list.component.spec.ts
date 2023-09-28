import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyListComponent } from './attorney-list.component';

describe('AttorneyListComponent', () => {
  let component: AttorneyListComponent;
  let fixture: ComponentFixture<AttorneyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttorneyListComponent]
    });
    fixture = TestBed.createComponent(AttorneyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
