import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplainceServiceService {

  baseUrl = environment.url

  constructor(private http: HttpClient,
    private userService: UserService) {
    this.http.get('assets/config/config.prod.json').subscribe((data: any) => {
      this.userService.changeUrl(data);
    })
  }

  //save complaince
  savecomplianceresponse(data) {
    return this.http.post(`${this.userService.urlValue.url}/api/compliance/save-compliance-response`, data);
  }

  getSecurityChecklist(){
    return this.http.get(`${this.userService.urlValue.url}/api/compliance/get-security-checklist`)
  }
  // get compliance
// getIp(){
//   return this.http.get<any>(`${this.userService.urlValue.url}/https://geolocation-db.com/json/`)
// }
getIPAddress() {
  return this.http.get('https://api.ipify.org/?format=json', {responseType: 'text'});
}
}
