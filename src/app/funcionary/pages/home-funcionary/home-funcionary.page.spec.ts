import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFuncionaryComponent } from './home-funcionary.page';

describe('HomeFuncionaryComponent', () => {
  let component: HomeFuncionaryComponent;
  let fixture: ComponentFixture<HomeFuncionaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFuncionaryComponent]
    });
    fixture = TestBed.createComponent(HomeFuncionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
