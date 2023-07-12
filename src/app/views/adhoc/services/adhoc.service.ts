import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdhocService {

  baseUrl = environment.url

  constructor(private http: HttpClient,
    private userService: UserService) {
    this.http.get('assets/config/config.prod.json').subscribe((data: any) => {
      this.userService.changeUrl(data);
    })
  }
  getadhocList(){
    return this.http.get(`${this.userService.urlValue.url}/api/compliance/get-adhoc-data`)
  }
  saveadhocList(data) {
    return this.http.post(`${this.userService.urlValue.url}/api/compliance/save-compliance-response`, data);
  }
}
