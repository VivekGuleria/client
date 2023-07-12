import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { ServicesService } from './services.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class TermsConditionComponent implements OnInit {
  acceptchk:boolean=false;
  acceptTerms:any;
  ipAddress:any;
  ipdetails:any;
  fileURL:any;
  tncdata:any
hidecheck:boolean=false;
termsAndCondition:any;
visible:boolean=false;
totalPages:any
page:any
data:any
id:any;
pdf:boolean=false;

filename:any;
  constructor( private spinner:NgxSpinnerService, private http:HttpClient,
    private notificationService:NotificationService,
    private userService:UserService,
    private router:Router,
    private tncService:ServicesService
    ) { 
      console.log("-----A")
      this.http.get<any>('https://geolocation-db.com/json/')
      .subscribe( data => {
        this.ipdetails=data
        this.ipAddress = data.IPv4
      })
    }

  ngOnInit(): void {
    console.log("-----B")
    this.checktnc();
    this.getFileData();
    this.tncdata=this.userService.userValue.termsAndConditions;
    this.filename=this.tncdata.filename
  if(this.tncdata.status='SUBMITTED'){
    this.hidecheck=false;
  }
  else{
   this.hidecheck=true;
  }
  }
  
  getFileData(){
  console.log("-----D")
    // this.spinner.show();
    // this.tncService.getFile().subscribe((res:any)=>{
    //   this.spinner.hide();
    //   this.termsAndCondition=res;
    // })

    this.spinner.show();
    this.tncService.getFile().subscribe((res:any)=>{
      console.log(res,72)
      this.spinner.hide();
      this.termsAndCondition=res;
      console.log(this.termsAndCondition)
    //   const file = new Blob([res],{type: 'application/pdf'});
    //   console.log("-----",file)
    //   this.fileURL = URL.createObjectURL(file);
    //  console.log(this.fileURL)
    // const file = new Blob([res],{type: 'application/pdf'})
    // console.log(this.filename)
    this.fileURL=`assets/tnc/${this.filename}`
    //  console.log("----fileURL1",fileURL1)
    //    this.fileURL = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
    //    if(this.fileURL!==undefined ||this.fileURL!=='' ){
    //    this.pdf=true
    //    }
    //    else{
    //     this.pdf=false
    //    }
console.log(this.fileURL)
      // document.querySelector("iframe").src = this.fileURL+"#view=FitH&scrollbar=0&toolbar=0&statusbar=0&messages=0&navpanes=0";
     
    })
  }
 
  pageRendered(e: any) {
    console.log('(page-rendered)', e.pageNumber);
   
  }

  afterLoadComplete(pdf:any){
    this.totalPages = pdf.numPages;
  }

  pagechanging(e: any){
    // this.page = e.pageNumber; // the page variable
    if(e.pageNumber==this.totalPages){
      this.visible=true
    }
    else{
      this.visible=false;
    }

  }

  checkaccept(){
    if(this.acceptTerms==true){
      this.acceptchk=true;
    }
    else{
      this.acceptchk=false;
    }
  }

  confirm() {
    var t=`By Clicking “Okay” button, I am accepting version ${this.tncdata.version} of Terms and Conditions
    from IP- ${this.ipAddress}, Location-${this.ipdetails.city},${this.ipdetails.state}, ${this.ipdetails.country_name}`
    Swal.fire({
      // title: 'Are you sure?',
      
      text: t,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Okay',
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.accpettnc();
      }
    });
    // this.dangerModal.show();
  }
  accpettnc(){

    let payload={
      merchantId:this.userService.userValue.merchantId,
      type: "TERMS_AND_CONDITIONS",
      userDetails: {
        userId:this.userService.userValue.id,
        ipAddress: this.ipAddress, city: this.ipdetails.city,
        state: this.ipdetails.state,
        country: this.ipdetails.country_name,
        userEmail:this.userService.userValue.userEmail
    },
    termsAndConditions:{
      filename: this.tncdata.filename ,
      version: this.tncdata.version,
      id:this.id
    }
  }
  this.spinner.show();
this.tncService.savetermsandCondition(payload).subscribe((res:any)=>{
  this.spinner.hide();
this.router.navigate(['/dashboard']);
  this.checktnc();
  this.notificationService.showSuccess(res.message, '');
});

  }
 
  checktnc(){
    console.log("-----C")
    this.tncService.getTermsConditions().subscribe((res:any)=>{
     console.log(res)
     this.data=res.status;
     this.id=res.id
     this.filename=res.filename
     console.log(this.data)
     if(this.data=="PENDING"){
      this.hidecheck=false;
     }
     else{
      this.hidecheck=true; 
     }
    });
  }
}
