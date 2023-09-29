import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdolescentComponent } from './home-adolescent.component';

describe('HomeAdolescentComponent', () => {
  let component: HomeAdolescentComponent;
  let fixture: ComponentFixture<HomeAdolescentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAdolescentComponent]
    });
    fixture = TestBed.createComponent(HomeAdolescentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
