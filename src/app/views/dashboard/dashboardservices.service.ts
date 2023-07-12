import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardservicesService {

  baseUrl = environment.url

  constructor(private http: HttpClient,
    private userService: UserService) {
    this.http.get('assets/config/config.prod.json').subscribe((data: any) => {
      this.userService.changeUrl(data);
    })
  }
  getTermsConditions(){
    return this.http.get(`${this.userService.urlValue.url}/api/compliance/check-terms-and-conditions`)
  }
  getTermsOfUse(){
    return this.http.get(`${this.userService.urlValue.url}/api/compliance/check-terms-of-use`)
  }
 
    getadhocList(){
      return this.http.get(`${this.userService.urlValue.url}/api/compliance/get-adhoc-data`)
    
  }
}
