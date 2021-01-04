import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentModel } from './paymentModel';
@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  _url = 'https://uat.bhartipay.com/crm/jsp/paymentrequest';
  constructor(private _http: HttpClient) {}
  enroll(paymentModel: PaymentModel) {
    return this._http.post<any>(this._url, paymentModel);
  }
}
