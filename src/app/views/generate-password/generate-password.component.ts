import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as shajs from 'sha.js';
import { NgxSpinnerService } from 'ngx-spinner';

import { UserService } from '../../services/user.service';
import { NotificationService } from '../../services/notification.service';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.scss']
})
export class GeneratePasswordComponent implements OnInit {
  generatePasswordForm: FormGroup;
  formSubmitted = false;
  token;
  showError = false;
  errorTitle;
  userEmail:any;
  loading:Boolean=false
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.token = this.activatedRoute.snapshot.paramMap.get('token');
    // this.createForm();
    this.spinner.show();
    setTimeout(() => {
      this.validateToken(this.token);
    }, 2000);
  }

  validateToken(token: any) {
    this.userService.validateToken({ token: token }).subscribe((data: any) => {
      this.spinner.hide();
      if(data.email!=''){
      this.userEmail=data.email
      }
      else{
        this.userEmail=data.phone
      }
      if (data.isValidToken == false) {
        this.notificationService.showError(data.message, "");
        this.router.navigate([`/login`]);
      } else {
        this.createForm();
      }
    })
  }
  // Getter for easy access to form fields
  get f() { return this.generatePasswordForm.controls; }

  createForm() {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.token = params['token'];
    // });
    this.generatePasswordForm = this.formBuilder.group({
      userEmail: [this.userEmail, [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}|(^[0-9]{10})+$")]],
      tokencred: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      token: [this.token, [Validators.required]],
      userCred: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        this.patternValidator(/\d/, { hasNumber: true }),
        this.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        this.patternValidator(/[a-z]/, { hasSmallCase: true }),
        this.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
          {
            hasSpecialCharacters: true
          })
      ])],
      confirmuserCred: ['', [Validators.required]],
    }
      , {
        validator: this.MustMatch('userCred', 'confirmuserCred')
      }
    );
  }

  patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }

      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);

      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }


  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  generatePassword() {
    this.loading=true
    this.formSubmitted = true;
    if (this.generatePasswordForm.controls.confirmuserCred.status == "INVALID" ||
      this.generatePasswordForm.controls.tokencred.status == "INVALID" ||
      this.generatePasswordForm.controls.userCred.status == "INVALID" ||
      this.generatePasswordForm.controls.token.status == "INVALID" ||
      this.generatePasswordForm.controls.userEmail.status == "INVALID") { 
        this.loading=false;
        return; }
    this.generatePasswordForm.value.userCred = shajs('sha256').update(this.generatePasswordForm.value.userCred).digest('hex');
    this.generatePasswordForm.value.confirmuserCred = shajs('sha256').update(this.generatePasswordForm.value.confirmuserCred).digest('hex');
    this.userService.createNewPassword(this.generatePasswordForm.value).pipe(finalize(()=>this.loading=false)).subscribe(
      (data: any) => {
        this.notificationService.showSuccess("Password Set Successfully", "");
        this.router.navigate([`/login`]);
      }, error => {
        

        this.showError = true;
        this.generatePasswordForm.controls['userCred'].reset();
        this.generatePasswordForm.controls['confirmuserCred'].reset();
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
