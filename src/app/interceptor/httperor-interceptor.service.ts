import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UserService } from '../services/user.service';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService implements HttpInterceptor {

  constructor(private notificationService: NotificationService,
    private user: UserService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const errorMessage = this.setError(error);
          console.log(errorMessage);

          if (errorMessage != undefined && errorMessage != null) {
            console.log("kyu");

            this.notificationService.showError(errorMessage, '');
          }
          console.log(error);

          if (error.status === 401) {
            console.log(this.user.userValue.refreshToken)
            //  this.user.refreshToken({ refreshToken: this.user.userValue.refreshToken }).subscribe((data: any) => {
            //   let abc = this.user.userValue;
            //  abc.token = data?.token;
            //    abc.refreshToken = data?.refreshToken;
            //   localStorage.removeItem('ptguser');

            //  localStorage.setItem('ptguser', JSON.stringify(abc));
            //  this.user.changeToken(abc);
            //})
            this.notificationService.showSuccess("Logout successfully", '');
            this.user.logout();
            location.reload(true);
          }
          return throwError(errorMessage);
        })
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
