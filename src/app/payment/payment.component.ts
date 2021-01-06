import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PaymentModel } from './paymentModel';
import { EnrollmentService } from './enrollment.service';
var sha256 = require('js-sha256');


const date = new Date();
const orderId = date.getTime();
const pId = '2001141020561000';
const sId = '8535b0d335e545d4';

var dat;
@Component({
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css'],
})
export class PaymentComponent {
  submitted = false;
  paymentModel = new PaymentModel(orderId, 150, 'Sale', '', '', '', '', '', 365, 'www.google.com', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '');
  constructor(private _enrollmentService: EnrollmentService) {}
  onSubmit() {
    this.submitted = true;
    this.paymentModel.HASH = generateHash(this.paymentModel);
    this.paymentModel.SALT = sId;
    this.paymentModel.PAY_ID = pId;
    this._enrollmentService.enroll(this.paymentModel).subscribe(
      (data) => {dat = data; console.log(data)},
      (error) => console.log(error)
    );
  }
}

function generateHash(data) {
  var preHashString = "";
  var dataKeys = ['AMOUNT','CURRENCY_CODE','CUST_CITY','CUST_COUNTRY','CUST_EMAIL','CUST_NAME','CUST_PHONE','CUST_SHIP_CITY','CUST_SHIP_COUNTRY','CUST_SHIP_NAME','CUST_SHIP_PHONE','CUST_SHIP_STATE','CUST_SHIP_STREET_ADDRESS1','CUST_SHIP_ZIP','CUST_STATE','CUST_STREET_ADDRESS1','CUST_ZIP','ORDER_ID','PAY_ID','PRODUCT_DESC','RETURN_URL','TXNTYPE'];
  dataKeys.forEach(function(key) {
      preHashString += key+"="+data[key]+"~";
  });

  if (data['MERCHANT_PAYMENT_TYPE'] && data['MERCHANT_PAYMENT_TYPE'] != "") {
      preHashString += "MERCHANT_PAYMENT_TYPE="+data['MERCHANT_PAYMENT_TYPE']+"~";
  }

  preHashString = preHashString.substring(0, preHashString.length - 1); // remove extra ~

  return sha256(preHashString + '8535b0d335e545d4').toUpperCase();
}