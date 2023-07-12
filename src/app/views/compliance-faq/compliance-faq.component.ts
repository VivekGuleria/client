import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
import { ComplainceServiceService } from './complaince-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compliance-faq',
  templateUrl: './compliance-faq.component.html',
  styleUrls: ['./compliance-faq.component.scss']
})
export class ComplianceFaqComponent implements OnInit {
  
value:any;
cols:any;
acceptchkk:boolean=true
processing:boolean=true;
loading:any=false;
val:boolean=true;
acceptchk:boolean=false;
NA:any='NA'
Yes:any='Yes'
No:any='No'
//  @ViewChild('complianceForm',{static:true}) c: NgForm;
  // cols = [
  //   {id:1, complianceArea: 'Is vendor supplied defaults always changed before installing a system on the network?', value: '', remarks:'' },
  //   {id:2, complianceArea: 'Are necessary default accounts removed or disabled before installing a system on the network? ', value: '', remarks:' ' },
  //   {id:3, complianceArea: 'Are all system components and software protected from known  vulnerabilities by installing applicable vendor supplied security patches?',  value: '', remarks:'' },
  //   {id:4, complianceArea: 'Are critical security patches installed within one month of release? ', value: '', remarks:' ' },
  //   { id:5,complianceArea: 'Are all users assigned a unique ID before allowing them to access system components or cardholder data?', value: '', remarks:' ' },
  //   { id:6,complianceArea: 'Is access for any terminated user immediately deactivated or removed?',  value: '', remarks:' ' },
  //   { id:7,complianceArea: `In addition to assigning a unique ID, is one or more of the following methods employed to authenticate all users

  //     • Something you know, such as a password or passphrase
  //      • Something you have such as a token device or smart card• Something you are such as a biometric'`, value: '', remarks:' ' },
   
  //   { id:8,complianceArea: `Are user password parameters configured to require passwords/passphrase meet the following ?
    
  //   • A minimum password length of at least seven characters
  //   • Contain both numeric and alphabetic characters Alternatively, the passwords/passphrases must have complexity and strength at least equivalent to the parameters specified above'`, value: '', remarks:' '},
  //   {id:9, complianceArea: `Are group, shared or generic accounts, password or other
  //   authentication methods prohibited as follows:
  //   • Generic user IDs and accounts are disabled or removed;
  //   • Shared user IDs for system administration activities and
  //   other critical functions do not exist
  //   • Shared and generic user'`, value: 'value', remarks:' '},
  //   {id:10, complianceArea: 'Are all media physically secured (including but not limited to computers, removable electronic media, paper receipts, paper reports and faxes)?', value:' ', remarks:' '},
  //   {id:11,complianceArea: 'Is strict control maintained over the internal or external distribution of any kind of media?',  value:' ', remarks:' '},
  //   {complianceArea: 'Do controls include the following:', value: 'value', remarks:' '},
  //   { id:12,complianceArea: 'Is media classified so the sensitivity of the data can be determined?', value:' ', remarks:' '},
  //   {id:13, complianceArea: 'Is the media sent by secured courier or other delivery method that can be accurately tracked?', value:' ', remarks:' '},
  //   { id:14,complianceArea: ' Is management approval obtained prior to moving the media (especially when media is distributed to individuals)?', value:' ', remarks:' '},
  //   {id:15, complianceArea: 'Is strict control maintained over storage and accessibility of media?', value:' ', remarks:' '},
  //   {id:16, complianceArea: 'Is all media destroyed when it is no longer needed for business or legal reasons?',value:' ', remarks:' '},
  //   { complianceArea: 'Is media destruction performed as follows:', value: 'value', remarks:' '},
  //   { id:17,complianceArea: 'Are hardcopy materials cross-cut shredded, incinerated, or pulped so that cardholder data cannot be reconstructed?', value: 'value', remarks:' '},
  //   { id:18,complianceArea: 'Are storage containers used for materials that contain information to be destroyed secured to prevent access to the contents?', value: 'value', remarks:' '},
  //   { complianceArea: 'Are policies and procedures maintained and implemented to manage service providers with whom cardholder data is shared, or that could affect the security of cardholder data, as follows:', value: '', remarks:' '},
  //   {id:19, complianceArea: 'Is a list of service providers maintained, including a description of the service(s) provided?',  value: 'value', remarks:' '},
  //   {id:20, complianceArea: 'Is a written agreement maintained that includes an acknowledgement that the service providers are responsible for the security of  cardholder data the service providers possess or otherwise store,  process or transmit on behalf of the customer, or the extent that they could impact the security of the customer’s cardholder data environment? ',  value: 'value', remarks:' '},
  //   { id:21,complianceArea: '. Is there an established process for engaging service providers, including proper due diligence prior to engagement?', value: 'value', remarks:' '},
  //   {id:22, complianceArea: 'Is a program maintained to monitor service providers PCI DSS compliance status at least annually', value: 'value', remarks:' '},
  //   {id:23, complianceArea: ' Is information maintained about which PCI DSS requirements are managed by each service provider and which are managed by the entity?', value: 'value', remarks:' '},
  //   {id:24, complianceArea: 'Has an incident response plan been created to be implemented in the event of system breach?', value: 'value', remarks:' '},
  // ];
id:any
ipAddress
  complianceForm:FormGroup;
  resubmit:boolean=false;
  ipdetails:any
  constructor( 
 
    private userService:UserService, private formBuilder:FormBuilder,
    private notificationService:NotificationService,
    private complianceService:ComplainceServiceService, private spinner:NgxSpinnerService,
    private http:HttpClient,
    private router:Router) {
      
      this.http.get<any>('https://geolocation-db.com/json/')
      .subscribe( data => {
        console.log('th data', data);
        this.ipAddress = data.IPv4
          this.ipdetails=data
        
      })
     }

  ngOnInit(): void {

   this.getSecurityChecklist();
this.createForm();
  }
  colstrue:any;
  readonly:any;
  isRed:Boolean=false;
  isGreen:Boolean=false;
  getSecurityChecklist(){
    this.spinner.show()
    this.complianceService.getSecurityChecklist().subscribe((res:any)=>{
      console.log(res);
      this.spinner.hide();
      this.loading=true;
      this.readonly=res.readOnly;
      if(res.readOnly==false){
      this.cols=res.checklist

      }
      if(res.readOnly==true){
       //this.resubmit=true
        this.colstrue=res.checklist
        this.resubmit=this.val


      }
      
    })
    
    
  }

  insert(arr, index, newItem){
    if(this.readonly==false){
    console.log(arr, index, newItem);
    [...arr.slice(0, index),newItem,...arr.slice(index)]
    // console.log([...arr.slice(0, index),newItem,...arr.slice(index)]);
     const result=[...arr.slice(0, index),newItem,...arr.slice(index)];
     return result
    }
    else{

    }
   }

  createForm():any {
   
    // this.shortCode = this.userService.userValue.shortCode;
    this.complianceForm = this.formBuilder.group(
     
      {
        // id: [''],
        // complianceArea: [''],
        remarks: [''],
        value: [''],
        merchantId: [this.userService.userValue.merchantId],
        userId:[this.userService.userValue.id]
      }
    
    );
 
  }
 
  get f(){
    return this.complianceForm.controls;
  }
  confirm() {
    var t=`By Clicking “Okay” button, I am Submitting Security Checklist 
    from IP- ${this.ipAddress}, Location-${this.ipdetails.city},${this.ipdetails.state},${this.ipdetails.country_name}`
    Swal.fire({
      // title: 'Are you sure?',
      
      text: t,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Okay',
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.submitForm();
      }
    });
    // this.dangerModal.show();
  }
  remarks:any
submitForm(){ 

  let payload={
    merchantId:this.complianceForm.value.merchantId,
    type:"SECURITY_CHECKLIST",
    userDetails: {
      userId:this.complianceForm.value.userId,
      ipAddress: this.ipAddress,
      state: this.ipdetails.state,
      city: this.ipdetails.city,
      country: this.ipdetails.country_name,
      userEmail:this.userService.userValue.userEmail
  },
    
  checklist:this.cols
  }
  this.spinner.show();
  this.complianceService.savecomplianceresponse(payload).subscribe((res:any)=>{
    this.spinner.hide();
    this.router.navigate(['/dashboard']);
    this.notificationService.showSuccess(res.message, '');
    this.getSecurityChecklist();
  })

 
}
resubmitForm(){
  this.resubmit=false;

this.cols=this.colstrue;


}
reset(){
  //this.acceptchkk=true;
 
  this.getSecurityChecklist()
  // this.resubmit=false;
  this.val=false



}
cancel(){
  this.getSecurityChecklist()
  // this.resubmit=true;
  this.val=true
}


// checkval(e:any){

// for(let i=0;i<this.cols.length;i++){
// if(this.cols[i].id){

//   }
//   if(this.cols[i].value==null ){
//   this.processing=true;
//   this.acceptchk=false;
  
//   break;
//   }
//   else{
//     this.acceptchk=true;
//     this.processing=false;
//   }
// }



// }

checkval(e:any){

  for(let i=0;i<this.cols.length;i++){
  if(this.cols[i].id){
    if(this.cols[i].value==null || this.cols[i].value!=='Yes'  && this.cols[i].remarks==null || this.cols[i].value!=='Yes'  && this.cols[i].remarks==''){
    
    this.acceptchk=false;
    break;
    }
  

    else {
      this.acceptchk=true;
    
    }
  

  
  
  }
}
}

checkvall(e:any){

  for(let i=0;i<this.cols.length;i++){
  if(this.cols[i].id){
   
    // if(this.cols[i].value==''||this.cols[i].value==null){
    // this.acceptchkk=true;
    // break;
    // }
    if(this.cols[i].value==null || this.cols[i].value!=='Yes'  && this.cols[i].remarks==null || this.cols[i].value!=='Yes'  && this.cols[i].remarks==''){
    
      this.acceptchkk=false;
      break;
      }
    else{
      this.acceptchkk=true;
     
    }
  }
 

  
}
  
}

changeBgGreen:boolean;
changeBgRed : boolean;
// changeColor(event:any){
//   if(event.target.value = 'true'){
//     this.changeBgGreen =true;
//     this.changeBgRed = false;
//     console.log("hello", event.target.value);
    
//   }
// }

changeColor1(event:any){
  console.log(event);
  if(event=="No"){
    this.isRed=true;
    this.isGreen=false
  }
  if(event=="Yes"){
    this.isGreen=true;
    this.isRed=false
  }
  // if(event.target.value = 'false'){
  //   this.changeBgRed = true;
  //   this.changeBgGreen =false;
  //   console.log("hello123", event.target.value);
  // }
}


}
