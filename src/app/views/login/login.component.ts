import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import * as shajs from 'sha.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../services/user.service';
import { NotificationService } from '../../services/notification.service';
import { ServiceConfigurationService } from '../service-provider-config/services/service-configuration.service';
import { TransactionService } from '../transactions/services/transaction-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted = false;
  Phide: boolean = true;
  // Mhide: boolean = true;
  // showError = false;
  // errorTitle;
checkval:boolean=false
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private notificationService: NotificationService,
    private spinner: NgxSpinnerService,
    private serviceConfigurationService:ServiceConfigurationService,
    private transactionService:TransactionService
  ) { }

  ngOnInit(): void {
    this.createForm();
    
  }

  // Getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      userEmail: ['', Validators.required],
      userCred: ['', Validators.required],
      userMFA: [''],
    });
  }

  loginUser() {
    if (!this.userService.urlValue) {
      this.http.get('assets/config/config.prod.json').subscribe((data: any) => {
        this.userService.changeUrl(data);
        this.loggingIn();
      })
    } else {
      this.loggingIn();
    }
  }


  loggingIn() {
    this.formSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.loginForm.value.userCred = shajs('sha256')
      .update(this.loginForm.value.userCred)
      .digest('hex');
    this.spinner.show();
    this.userService.userLogin(this.loginForm.value).subscribe(
      (data: any) => {
        
        data.lastUpdatedAt = new Date();
        data.loggedInAT = new Date();
        this.notificationService.showSuccess('Login Successfully', '');
        sessionStorage.setItem('ptguser', JSON.stringify(data));
        this.userService.changeToken(data);
        this.router.navigate([`/dashboard`]);
        this.spinner.hide();
      //this.defaultdata(data);
      //
      
    // this.router.navigate(['/compliance-faq'])
      }, (error => {
        this.spinner.hide();
      }))
  }
  hidePass() {
    this.Phide = !this.Phide;
  }
  // hideMFA() {
  //   this.Mhide = !this.Mhide;
  // }

  // defaultdata(loginData){
  //   this.transactionService.dropdownList().subscribe((data:any)=>{
  //     console.log(data);
  //     this.serviceProvider(loginData);

      
  //      if(data.isMerchantRouting) {
  //       localStorage.setItem('isMerchantRouting', "1");
  //      }
  //      else{
     
  //       localStorage.setItem('isMerchantRouting', "0");
        
  //      }

  //   })
  // }
  // serviceProvider(data) {


  //   const payload = { merchantId: data.merchantId}
  //   this.serviceConfigurationService.getServiceProviderList(payload).subscribe((res: any) => {
  //     const resObj = res ? res.length : [];
  //     localStorage.setItem('serviceProcount', resObj);
  //     this.userService.changeToken(data);
  //     if(this.userService.userValue.userType=='SERVICE_PROVIDER'){
  //       this.router.navigate([`/transaction/sale`]);
  //     }
  //     else{
  //      this.router.navigate([`/dashboard`]);
  //     }
  //     this.spinner.hide();
  //   }, (error => {
  //     this.spinner.hide();
  //   }))
  // }
}
