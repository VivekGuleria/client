import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { catchError, finalize, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { NotificationService } from '../services/notification.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(
    private user: UserService,
    private notificationService: NotificationService,
    private router: Router
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("reqqqqqq",req);
    var isIpApi:boolean=false;
    if(req.url=='https://geolocation-db.com/json/'){
      isIpApi=true;
      
    }
    console.log(isIpApi );
    // Get the auth token from  localstorage.
    const authToken: any = JSON.parse(sessionStorage.getItem('ptguser'));
    let newHeaders = req.headers;
    if (authToken && !isIpApi) {
      // If we have a token, we append it to our new headers
      newHeaders = newHeaders.append(
        'Authorization',
        'Bearer ' + authToken.token
      );
    }
    
    const authReq = req.clone({ headers: newHeaders });
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    // const authReq = req.clone({
    //     headers: req.headers.set('x-auth-token', authToken)
    // });

    // send cloned request with header to the next handler.
    return next.handle(authReq).pipe(
      // retry on failure
      retry(0),

      // handle errors
      catchError((err: HttpErrorResponse) => {
        if (err.error.path == '/api/auth/signin') {
          return throwError(err);
        } else if (err.error.text == 'Password reset successfully') {
          this.notificationService.showSuccess('New Password Generated', '');
          this.router.navigate(['/login']);
        } else if (
          err.error.path == '/api/auth/reset-password' ||
          err.error.path == '/api/auth/forgot-password/'
        ) {
          return throwError(err);
        }
        const errorMessage = this.setError(err);

        if (err.status === 401 && this.user.userValue != null) {
          // const currentDate: any = new Date();
          // const lastDate: any = new Date(this.user.userValue.lastUpdatedAt);
          // let diff = Math.abs(currentDate - lastDate);
          // let minutes = Math.floor((diff / 1000) / 60);
          // console.log(minutes);

          // if (minutes < this.user.userValue.idleTimeout) {
          this.user.refreshToken({ refreshToken: this.user.userValue.refreshToken }).subscribe((data: any) => {
            let abc = this.user.userValue;
            abc.token = data?.token;
            abc.refreshToken = data?.refreshToken;
            abc.lastUpdatedAt = new Date();
            sessionStorage.removeItem('ptguser');
            sessionStorage.setItem('ptguser', JSON.stringify(abc));
            this.user.changeToken(abc);
            const authToken: any = JSON.parse(sessionStorage.getItem('ptguser'));
            let newHeaders = req.headers;
            if (authToken) {
              newHeaders = newHeaders.append(
                'Authorization',
                'Bearer ' + authToken.token
              );
            }
            const authReq = req.clone({ headers: newHeaders });
            location.reload(true);
            return next.handle(authReq);
          }, err => {
            localStorage.clear();
            sessionStorage.clear()
            this.notificationService.showError("", "Your session has timed out. Please login again.");
            this.router.navigate(['./login']);
            // this.notificationService.showError(errorMessage, '');
            // this.user.logout();
          })
          // } else if (this.user.userValue != null) {
          //   this.notificationService.showError("Session Expired !", 'Please Login again');
          //   this.user.logout();
          // }
          // this.notificationService.showSuccess("Sign In Again", 'Token Expired !');
          // this.user.logout();
        } else if (err.status === 403) {
          localStorage.clear();
          sessionStorage.clear()
          this.notificationService.showError("", "Access Denied Can't Perform This Action !");
          this.router.navigate(['./login']);
        }
        else if (errorMessage != undefined && errorMessage != null) {
          // this.user.logout();
          // this.notificationService.showError(errorMessage, '');
          Swal.fire('', errorMessage, 'error');
        }
        return throwError(err);
      }),
      // profiling
      finalize(() => {
        const profilingMsg = `${req.method} "${req.urlWithParams}"`;
        // console.log(profilingMsg);
      })
      // return next.handle(authReq);
    );
  }

  setError(error: HttpErrorResponse): string {
    let errorMessage = 'Unknown error occured';
    if (error.error instanceof ErrorEvent) {
      // Client side error
      errorMessage = error.error.message;
    } else {
      // server side error
      if (error.status !== 0) {
        errorMessage = error.error.message;
      }
    }
    return errorMessage;
  }
}
