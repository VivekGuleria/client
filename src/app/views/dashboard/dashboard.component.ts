import { style } from '@angular/animations';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ComplainceServiceService } from '../compliance-faq/complaince-service.service';
import { DashboardservicesService } from './dashboardservices.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
 
  constructor(private userService:UserService, private spinner:NgxSpinnerService,
    private complianceService:ComplainceServiceService, private dashboardService:DashboardservicesService,
    private router:Router) { }
  termsAndConditions:any;
  tncData:any;
  termsOfUseData:any;
  loading:boolean=false
  paperTnCSigned;

 
  ngOnInit(): void {
    this.paperTnCSigned=this.userService.userValue.paperTnCSigned
   this.termsAndConditions=this.userService.userValue.termsAndConditions
   this.viewComplianceService();
   this.gettnc();
   this.getadhoc();
   this.gettermsofuse();
  }
 
 
complainceStatus:any;
complianceData:any
  viewComplianceService(){
    this.spinner.show();
    
    this.complianceService.getSecurityChecklist().subscribe((res:any)=>{
      this.spinner.hide();
     this.complianceData=res;
     
     console.log("call compliance",this.complianceData)
     
      if(res.readOnly==false){
this.complainceStatus='PENDING'
      }
      if(res.readOnly==true){
        this.complainceStatus='SUBMITTED'
              }
    })
  }

  viewmcc(){
this.router.navigate(['/compliance-faq'])
  }
  viewtnc(){
this.router.navigate(['/termsCondition'])

  }
  vieadhoc(){
    this.router.navigate(['/adhoc'])
  }

  viewtermofuse(){
    this.router.navigate(['/term-of-use'])
  }

  gettnc(){

    this.spinner.show();
    this.dashboardService.getTermsConditions().subscribe((res:any)=>{
      this.spinner.hide();
      console.log("call tnc")
      this.tncData=res;
      this.loading=true;
    })
    
  }

  gettermsofuse(){
    this.spinner.show();
    this.dashboardService.getTermsOfUse().subscribe((res:any)=>{
      this.spinner.hide();
      console.log("call terms of use")
      this.termsOfUseData=res;
      this.loading=true;
    })  
  }

  adhocData:any
  adhocstatus:any
  getadhoc(){
    this.spinner.show();
    this.dashboardService.getadhocList().subscribe((res:any)=>{
      this.spinner.hide();
  console.log("call adhoc")
      this.adhocData=res;
   
      for(let i=0;i<this.adhocData.length;i++){
      if(this.adhocData[i].status=='PENDING'){
      this.adhocstatus="PENDING"
      break;
      }
      else{
        this.adhocstatus="SUBMITTED"
      }
    }
    })
  
  }
}

