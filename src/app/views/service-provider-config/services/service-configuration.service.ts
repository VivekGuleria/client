import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceConfigurationService {

  constructor(private http: HttpClient,
    private userService: UserService) {
    this.http.get('assets/config/config.prod.json').subscribe((data: any) => {
      this.userService.changeUrl(data);
    })
  }

  getStoreDropdown(payload) {
    return this.http.post(`${this.userService.urlValue.url}/api/merchant-service-provider-configuration/drop-down`, payload);
  }

  getConfigList(payload) {
    return this.http.post(`${this.userService.urlValue.url}/api/merchant-service-provider-configuration/list`, payload);
  }

  saveConfig(payload) {
    return this.http.post(`${this.userService.urlValue.url}/api/merchant-service-provider-configuration/save-config`, payload);
  }

  getServiceProviderList(payload) {
    return this.http.post(`${this.userService.urlValue.url}/api/merchant-service-provider-configuration/service-provider-list`, payload);
  }

  editConfig(payload) {
    return this.http.post(`${this.userService.urlValue.url}/api/merchant-service-provider-configuration/edit-config`, payload);
  }

  getChekerList(payload) {
    return this.http.post(`${this.userService.urlValue.url}/api/merchant-service-provider-configuration/checker-list`, payload);
  }

  
  getChekerCount(payload) {
    return this.http.post(`${this.userService.urlValue.url}/api/merchant-service-provider-configuration/checker-list-count`, payload);
  }

  setStatus(payload) {
    return this.http.post(`${this.userService.urlValue.url}/api/merchant-service-provider-configuration/approve-and-reject`, payload);
  }
 
  updateCheckerListRecord(payload){
    return this.http.post(`${this.userService.urlValue.url}/api/merchant-service-provider-configuration/update-service-provider-config-staging`, payload);
  }
}