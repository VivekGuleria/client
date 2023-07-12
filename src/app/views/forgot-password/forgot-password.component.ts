import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { NotificationService } from '../../services/notification.service';
import { finalize } from 'rxjs/operators';
import {NgxCaptchaService} from '@binssoft/ngx-captcha';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  formSubmitted = false;
  captchaStatus:boolean=false;
  token:any
  textinput:any
  showError = false;
  errorTitle = "";
  showSuccess = false;
  successMessage = "";
  loading:Boolean=false
  captcha:any;
  isCptchamatched:Boolean=false
  captchaConfig:any = {
    type:2, 
    length:6, 
    cssClass:'custom',
    back: {
     stroke:"#2F9688",
     solid:"#f2efd2"
    } , 
    font:{
      color:"#000000", 
      size:"35px"
    }
  };
  capt:any
check=false
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private notificationService: NotificationService,
    private captchaService:NgxCaptchaService) { 
    
      // this.captchaService.captchStatus.subscribe((status)=>{
      //   console.log(status);
        
      //   this.captchaStatus = status;
      //   console.log(this.captchaStatus);
        
      //   if (status == false) {
      //     alert("Opps!\nCaptcha mismatch")
      //   } else if (status == true)  {
      //     alert("Success!\nYou are right")
      //   }
      // });
    }

captchafun(){
  var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
                 ,'W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i',
                 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!','@','#','$','%','^','&','*','+'];
                 var a = alpha[Math.floor(Math.random()*71)];
                 var b = alpha[Math.floor(Math.random()*71)];
                 var c = alpha[Math.floor(Math.random()*71)];
                 var d = alpha[Math.floor(Math.random()*71)];
                 var e = alpha[Math.floor(Math.random()*71)];
                 var f = alpha[Math.floor(Math.random()*71)];

                 var final = a+b+c+d+e+f;
          this.forgotPasswordForm.get('capt').patchValue(final);
           
               }
             

  validcap(){
   var stg1 = this.capt;
   var stg2 = this.textinput;
  if(stg1==stg2){
    alert("Form is validated Succesfully");
    return true;
  }else{
    alert("Please enter a valid captcha");
    return false;
  
 }
}
  ngOnInit(): void {
    this.createForm();
    this.captchafun();
  }

  // Getter for easy access to form fields
  get f() { return this.forgotPasswordForm.controls; }

  createForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}|(^[0-9]{10})+$")]],
      capt: ['', Validators.required],
      captcheck:['',Validators.required]
    });
  }

  // resolved(captchaResponse: string) {
  //   console.log(`Resolved captcha with response: ${captchaResponse}`);
  // }

  captchaCheck(){
    var stg1 = this.forgotPasswordForm.get('capt').value;
    var stg2 = this.forgotPasswordForm.get('captcheck').value;

    
   if(stg1!==stg2 ){
    this.captchaStatus=true;
    
   }
   if(stg1.length!==stg2.length){
    this.captchaStatus=true;
   }
   else if(stg1===stg2){
    this.captchaStatus=false;
    // this.isCptchamatched=true
   }
  
  }

  forgotPassword() {
    this.loading=true
    this.showError = false;
    this.formSubmitted = true;
    // if (this.forgotPasswordForm.invalid) { return; }
    // this.userService.sendOtpToResetPassword(this.forgotPasswordForm.value).pipe(finalize(()=>this.loading=false)).subscribe(

    //

  if(this.captchaStatus){
    this.loading=false
    return;
  }
    
   if (this.forgotPasswordForm.invalid) {this.loading=false; return; }
    this.userService.sendOtpToResetPassword(this.forgotPasswordForm.value).pipe(finalize(()=>this.loading=false)).subscribe(
      (data: any) => {
        this.notificationService.showSuccess(data.message, "");
        // this.showSuccess = true;
        // this.successMessage = data.message;
        this.router.navigate([`/login`]);
      }, error => {
        this.showError = true;
        if (error.error instanceof ErrorEvent) {
          // Client side error
          this.errorTitle = error.error.message;
        } else {
          // server side error
          if (error.status !== 0) {
            this.errorTitle = error.error.message;
          }
        }
      }
    );
  }
}
