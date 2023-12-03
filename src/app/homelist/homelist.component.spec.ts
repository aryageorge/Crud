import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelistComponent } from './homelist.component';

describe('HomelistComponent', () => {
  let component: HomelistComponent;
  let fixture: ComponentFixture<HomelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomelistComponent]
    });
    fixture = TestBed.createComponent(HomelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
