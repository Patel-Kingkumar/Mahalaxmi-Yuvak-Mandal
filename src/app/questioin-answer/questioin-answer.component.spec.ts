import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestioinAnswerComponent } from './questioin-answer.component';

describe('QuestioinAnswerComponent', () => {
  let component: QuestioinAnswerComponent;
  let fixture: ComponentFixture<QuestioinAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestioinAnswerComponent]
    });
    fixture = TestBed.createComponent(QuestioinAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
