import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private Http: HttpClient,
    private userService: UserService) {
    this.Http.get('assets/config/config.prod.json').subscribe((data: any) => {
      this.userService.changeUrl(data);
    })
  }

  getReportsTransaction(type, merchantId, recordPerPage, offset,aggregatorID) {
    if(this.userService.userValue.merchantType==='AGG'){
    return this.Http.get(`${this.userService.urlValue.url}/api/reports/list?type=${type}&merchantId=${merchantId}&limit=${recordPerPage}&offset=${offset}&aggregatorID=${aggregatorID}`);
    }
    else{
      return this.Http.get(`${this.userService.urlValue.url}/api/reports/list?type=${type}&merchantId=${merchantId}&limit=${recordPerPage}&offset=${offset}`);
    }
  }
  generateReportsTransaction(data) {
     return this.Http.post(`${this.userService.urlValue.url}/api/reports/generate-report`, data);
  }

  downloadReport(id, merchantID,aggregatorID) {
    if(this.userService.userValue.merchantType==='AGG'){
    return this.Http.get(`${this.userService.urlValue.url}/api/reports/download-report?id=${id}&merchantId=${merchantID}&aggregatorID=${aggregatorID}`, { responseType: 'text' });
    }
    else{
      return this.Http.get(`${this.userService.urlValue.url}/api/reports/download-report?id=${id}&merchantId=${merchantID}`, { responseType: 'text' });
    }
  }

  merchantList(payLaod) {
    return this.Http.post(`${this.userService.urlValue.url}/api/merchant/merchantList`, payLaod);
  }

}
