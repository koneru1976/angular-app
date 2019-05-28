import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddExpenseModalContentComponent } from '../add-expense-modal-content/add-expense-modal-content.component';

@Component({
  selector: 'app-add-expense-modal',
  templateUrl: './add-expense-modal.component.html',
  styles: []
})
export class AddExpenseModalComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  addExpense() {
    this.modalService.open(AddExpenseModalContentComponent);
  }

}
