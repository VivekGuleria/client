import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

import { NotificationService } from '../services/notification.service';
import { PreviousRouteService } from '../services/previous-route.service';

import { RoleAccess } from '../models/role-access';
// import { environment } from '../../environments/environment';

let environment = {
  url: ''
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();

  public userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  public urlSubject: BehaviorSubject<any>;
  public url: Observable<any>;

  constructor(private http: HttpClient,
    private router: Router,
    private notificationService: NotificationService) {
    this.userSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('ptguser')));
    this.user = this.userSubject.asObservable();

    this.urlSubject = new BehaviorSubject<any>(null);
    this.url = this.urlSubject.asObservable();


  }

  // register api
  userRegister(data) {
    return this.http.post(`${this.urlValue.url}/api/auth/signup`, data);
  }

  // login api
  userLogin(data) {
    return this.http.post(`${this.urlValue.url}/api/auth/signin`, data);
  }

  // refresh token
  refreshToken(data) {
    return this.http.post(`${this.urlValue.url}/api/auth/refreshtoken`, data);
  }

  // logout api
  logout() {
    console.log(this.userValue)
    let name = this.userValue.userName;
    console.log(name)
    return this.http.get(`${this.urlValue.url}/api/auth/signout/${name}/`).subscribe((data: any) => {
      sessionStorage.removeItem('ptguser');
      // localStorage.removeItem('count');
      // localStorage.removeItem('count1');
      // localStorage.removeItem('count2');
      // localStorage.removeItem('serviceProcount');
      // localStorage.removeItem('displayHdfc');
      // localStorage.removeItem('isMerchantRouting');
      this.userSubject.next(null);
      this.urlSubject.next(null);
      this.router.navigate(['/login']);
      this.notificationService.showSuccess(data.message, "");
      // setTimeout(() => {
      //   window.location.reload()
      // }, 1000);
      location.reload()
    })
    // location.reload();
  }

  validateToken(token) {
    return this.http.post(`${this.urlValue.url}/api/auth/verify-token`, token);
  }

  //modified 
  getRoles(options?) {
    const params = this.createParams(options)
    return this.http.get(`${this.urlValue.url}/api/roles/list`, { params: params });
  }

  // getRolesByUserType(){
  //   return this.http.get(`${this.urlValue.url}/api/roles/list?userType=SERVICE_PROVIDER`);
  // }

  updateContactDetails(data) {
    return this.http.post(`${this.urlValue.url}/api/merchant/update-details`, data);
  }

  // get all users
  getAllUsers() {
    return this.http.get(`${this.urlValue.url}/api/users/list`);
    // return this.http.get(`${this.urlValue.url}/api/users/list?page=${page}&size=${itemsPerPage}`);
  }

  // get specific user details
  getUserDetails(id) {
    return this.http.get(`${this.urlValue.url}/api/users/${id}`);
  }

  // delete user
  deleteUser(id) {
    return this.http.post(`${this.urlValue.url}/api/users/delete/${id}`, id);
  }

  // edit user
  editUser(id, data) {
    return this.http.post(`${this.urlValue.url}/api/users/${id}`, data);
  }

  sendOtpToResetPassword(data) {
    return this.http.post(`${this.urlValue.url}/api/auth/forgot-password/?input=${data.userEmail}`, data);
  }

  createNewPassword(data) {
    return this.http.post(`${this.urlValue.url}/api/auth/reset-password`, data);
  }

  addRole(data) {
    return this.http.post(`${this.urlValue.url}/api/roles/create`, data);
  }

  // Checking Permission
  // check user login with this role have permission or not
  havePermission(access) {
    let token = this.userValue;
    if (token.actions.includes(access)) {
      return true;
    } else {
      return false;
    }
  }

  // private handleError(error: HttpErrorResponse) {
  //   console.log(error);
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // }

  getMessage() {
    return this.http.get(`${this.urlValue.url}/api/test/user`);
  }

  generateMFAKey(data) {
    return this.http.get(`${this.urlValue.url}/api/users/generate-mfakey/${data}`);
  }

  downloadMFAKey(data) {
    return this.http.get(`${this.urlValue.url}/api/users/download-mfakey/${data}`);
  }

  getAllServiceProviders(data){
    return this.http.post(`${this.urlValue.url}/api/service-provider/all-data`,data);
  }


  public get userValue(): any {
    return this.userSubject.value;
  }

  public get urlValue(): any {
    return this.urlSubject.value;
  }

  changeUrl(url: any) {
    this.urlSubject.next(url);
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  changeToken(token: any) {
    this.userSubject.next(token);
  }
  
  //create params
  createParams(options: any): HttpParams {
    let params = new HttpParams();
    if (options) {
      for (const key in options) {
        if (options.hasOwnProperty(key) && options[key] != null) {
          params = params.set(key, options[key]);
        }
      }
    }
    return params;
  }

}
