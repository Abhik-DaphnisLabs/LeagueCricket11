import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentModel } from './paymentModel';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  _url = 'https://uat.bhartipay.com/crm/jsp/paymentrequest';
  constructor(private _http: HttpClient) {}
  enroll(paymentModel: PaymentModel) {   
    // var InputJSON = paymentModel;
    // var output = eval("OBJtoXML("+InputJSON+");")
    // console.log(output);
    return this._http.post<any>(this._url, paymentModel,
      {
        headers: new HttpHeaders({
          'content-type': 'text/html',          
        }
        )
      }
      )
  }
}
// function OBJtoXML(obj) {
//   var xml = '';
//   for (var prop in obj) {
//     xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
//     if (obj[prop] instanceof Array) {
//       for (var array in obj[prop]) {
//         xml += "<" + prop + ">";
//         xml += OBJtoXML(new Object(obj[prop][array]));
//         xml += "</" + prop + ">";
//       }
//     } else if (typeof obj[prop] == "object") {
//       xml += OBJtoXML(new Object(obj[prop]));
//     } else {
//       xml += obj[prop];
//     }
//     xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
//   }
//   var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
//   return xml;
// }
