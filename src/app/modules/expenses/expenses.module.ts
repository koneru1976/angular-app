import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseModalComponent } from './add-expense-modal/add-expense-modal.component';
import { AddExpenseModalContentComponent } from './add-expense-modal-content/add-expense-modal-content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AddExpenseModalComponent, AddExpenseModalContentComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    AddExpenseModalComponent,
    AddExpenseModalContentComponent
  ],
  entryComponents: [AddExpenseModalContentComponent]
})
export class ExpensesModule {
}
