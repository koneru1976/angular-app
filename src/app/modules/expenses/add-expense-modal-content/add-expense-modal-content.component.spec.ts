import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseModalContentComponent } from './add-expense-modal-content.component';

describe('AddExpenseModalContentComponent', () => {
  let component: AddExpenseModalContentComponent;
  let fixture: ComponentFixture<AddExpenseModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpenseModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpenseModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
