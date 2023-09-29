import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdolescentListComponent } from './adolescent-list.component';

describe('AdolescentListComponent', () => {
  let component: AdolescentListComponent;
  let fixture: ComponentFixture<AdolescentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdolescentListComponent]
    });
    fixture = TestBed.createComponent(AdolescentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
