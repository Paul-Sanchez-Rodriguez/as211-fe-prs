import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAttorneyPage } from './home-attorney.page';

describe('HomeAttorneyComponent', () => {
  let component: HomeAttorneyPage;
  let fixture: ComponentFixture<HomeAttorneyPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAttorneyPage]
    });
    fixture = TestBed.createComponent(HomeAttorneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
