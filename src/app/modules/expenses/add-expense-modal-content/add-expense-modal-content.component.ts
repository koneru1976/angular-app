import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-expense-modal-content',
  templateUrl: './add-expense-modal-content.component.html',
  styles: []
})
export class AddExpenseModalContentComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
