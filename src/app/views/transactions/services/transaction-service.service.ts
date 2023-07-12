import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from '../../../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  baseUrl = environment.url

  constructor(private http: HttpClient,
    private userService: UserService) {
    this.http.get('assets/config/config.prod.json').subscribe((data: any) => {
      this.userService.changeUrl(data);
    })
  }

  getTransactionList(options, param) {
    const params = this.createParams(param)
    const payload = options;
    // console.log(param);
    // console.log(params.toString());
    
    return this.http.post(`${this.userService.urlValue.url}/api/transaction-logs/details?${params.toString()}`, payload);
  }

  transactionRefundDetails(data) {
    return this.http.post(`${this.userService.urlValue.url}/api/transaction-logs/refund-details`, data);
  }

  dropdownList() {
    return this.http.get(`${this.userService.urlValue.url}/api/defaults`);
  }

  merchantList(payLaod) {
    return this.http.post(`${this.userService.urlValue.url}/api/merchant/merchantList`, payLaod);
  }

  transactionProcesssRefund(data){
    return this.http.post(`${this.userService.urlValue.url}/api/transaction-logs/process-refund`,data);
  }

  getMerchantPaymentModes(data){
    return this.http.post(`${this.userService.urlValue.url}/api/merchant/payment-mode`,data);
  }


  createParams(options: any): HttpParams {
    let params = new HttpParams();
    if (options) {
      for (const key in options) {
        if (options.hasOwnProperty(key)) {
          params = params.set(key, options[key]);
        }
      }
    }
    return params;
  }

  getPaymentSubType(data){
    return this.http.post(`${this.userService.urlValue.url}/api/merchant-routing/payment-sub-type-dropdown`,data);
  }

  getMerchantRoutingList(data){
    return this.http.post(`${this.userService.urlValue.url}/api/merchant-routing/merchant-routing-list`,data);
  }
  getCutOverDropdown(data){
    return this.http.post(`${this.userService.urlValue.url}/api/defaults/business-cut-over`,data);
  }
}
