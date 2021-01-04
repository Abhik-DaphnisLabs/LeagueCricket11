import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PaymentModel } from './paymentModel';
import { EnrollmentService } from './enrollment.service';
@Component({
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css'],
})
export class PaymentComponent {
  submitted = false;
  paymentModel = new PaymentModel(0, 0, 'Sale', '', '', '', '', '', 365, '');
  constructor(private _enrollmentService: EnrollmentService) {}
  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.paymentModel).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}
