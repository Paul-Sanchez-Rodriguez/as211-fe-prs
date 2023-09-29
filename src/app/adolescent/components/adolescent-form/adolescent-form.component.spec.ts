import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdolescentFormComponent } from './adolescent-form.component';

describe('AdolescentFormComponent', () => {
  let component: AdolescentFormComponent;
  let fixture: ComponentFixture<AdolescentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdolescentFormComponent]
    });
    fixture = TestBed.createComponent(AdolescentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
