import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl = environment.url

  constructor(private http: HttpClient,
    private userService: UserService) {
    this.http.get('assets/config/config.prod.json').subscribe((data: any) => {
      this.userService.changeUrl(data);
    })
  }

  getFile(){
    return this.http.get(`${this.userService.urlValue.url}/api/compliance/get-terms-and-conditions`, {responseType: 'arraybuffer'})
  }
   //save complaince
   savetermsandCondition(data) {
    return this.http.post(`${this.userService.urlValue.url}/api/compliance/save-compliance-response`, data);
  }

  getTermsConditions(){
    return this.http.get(`${this.userService.urlValue.url}/api/compliance/check-terms-and-conditions`)
  }
}
