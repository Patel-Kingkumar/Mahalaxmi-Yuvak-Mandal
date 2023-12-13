import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchieveComponent } from './achieve.component';

describe('AchieveComponent', () => {
  let component: AchieveComponent;
  let fixture: ComponentFixture<AchieveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchieveComponent]
    });
    fixture = TestBed.createComponent(AchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
