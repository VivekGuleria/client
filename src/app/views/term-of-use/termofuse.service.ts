import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class TermofuseService {

  constructor(private http: HttpClient,
    private userService: UserService) {
    this.http.get('assets/config/config.prod.json').subscribe((data: any) => {
      this.userService.changeUrl(data);
    })
  }

  getFile(){
    return this.http.get(`${this.userService.urlValue.url}/api/compliance/get-terms-of-use`, {responseType: 'arraybuffer'})
  }

  //save complaince
  saveTermsOfUse(data) {
    return this.http.post(`${this.userService.urlValue.url}/api/compliance/save-compliance-response`, data);
  }

  getTermsOfUse(){
    return this.http.get(`${this.userService.urlValue.url}/api/compliance/check-terms-of-use`)
  }
}
