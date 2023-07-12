import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AdhocService } from './services/adhoc.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-adhoc',
  templateUrl: './adhoc.component.html',
  styleUrls: ['./adhoc.component.scss']
})
export class AdhocComponent implements OnInit {
  @ViewChild("closebutton") closebutton;
  // @ViewChild('exampleModal') templateRef: TemplateRef<any>;
  modalRef: BsModalRef;
//  cols = [
//     {id:1, complianceArea: 'Is vendor supplied defaults always changed before installing a system on the network?', status: 'Pending', date:'' },
//     {id:2, complianceArea: 'Are necessary default accounts removed or disabled before installing a system on the network? ', status: 'Pending', date:' ' },
//     {id:3, complianceArea: 'Are all system components and software protected from known  vulnerabilities by installing applicable vendor supplied security patches?',  status: 'Pending', date:'' },
//     {id:4, complianceArea: 'Are critical security patches installed within one month of release? ', status: 'Pending', date:' ' },
//     { id:5,complianceArea: 'Are all users assigned a unique ID before allowing them to access system components or cardholder data?', status: 'Pending', date:' ' },
//     { id:6,complianceArea: 'Is access for any terminated user immediately deactivated or removed?',  status: 'Pending', date:' ' },
//     { id:7,complianceArea: `In addition to assigning a unique ID, is one or more of the following methods employed to authenticate all users

//       • Something you know, such as a password or passphrase
//        • Something you have such as a token device or smart card• Something you are such as a biometric'`, status: 'Pending', date:' ' },
   
 

//   ];
ipdetails:any
ipAddress:any
  constructor( private modalService: BsModalService,
    private adhocService:AdhocService,private spinner:NgxSpinnerService, private http:HttpClient,
    private notificationService:NotificationService,
    private userService:UserService) { 
      this.http.get<any>('https://geolocation-db.com/json/')
      .subscribe( data => {
this.ipdetails=data
console.log(this.ipdetails)
        this.ipAddress = data.IPv4
      })
    }

  ngOnInit(): void {
    this.getadhoc();
  }

  // ngAfterViewInit() {
  //   const user = {
  //     id: 10
  //   };
  //   setTimeout(() => {
  //     this.modalRef = this.modalService.show(this.templateRef, {
  //       initialState : user
  //    })
  // })
  // }
  showtemp:boolean=false;
viewData:any;
cols:any
id:any;
clause:any;
status:any
description:any
  viewCompliance(e:any){
    this.viewData=e;
    this.id=e.id
    this.clause=e.clause
    this.description=e.description
    this.status=e.status
    // this.modalRef = this.modalService.show(exampleModal,e);
  }


  getadhoc(){
    this.adhocService.getadhocList().subscribe((res:any)=>{
      this.cols=res
     
    })
  }
  confirm() {
    var t=`By Clicking “Okay” button, I am  Accepting Adhoc Clause
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
        
        this.saveAdhoc();
      }
    });
    // this.dangerModal.show();
  }
  saveAdhoc(){
    
    let payload={
      merchantId:this.userService.userValue.merchantId,
      type: "AD_HOC",
      userDetails: {
        userId:this.userService.userValue.id,
        ipAddress: this.ipAddress,
        city: this.ipdetails.city,
        state: this.ipdetails.state,
        country: this.ipdetails.country_name,
        userEmail:this.userService.userValue.userEmail
    },
    adhoc: {
      id: this.id,
      clause: this.clause,
      description:this.description
  },

  }
  this.spinner.show();
this.adhocService.saveadhocList(payload).subscribe((res:any)=>{
  this.getadhoc();
  this.spinner.hide();
  this.notificationService.showSuccess(res.message, '');
  this.closebutton.nativeElement.click();
  // this.modalRef.hide();
});

  }
  

  sortDir:any=1
  onSortClick(col,event) {
    
    let target = event.currentTarget,
      classList = target.classList;

    if (classList.contains('fa-chevron-up')) {
      classList.remove('fa-chevron-up');
      classList.add('fa-chevron-down');
      this.sortDir=-1;
    } else {
      classList.add('fa-chevron-up');
      classList.remove('fa-chevron-down');
      this.sortDir=1;
    }
    this.sortArr('status');
    //this.sortTable(col)
  }

  sortArr(colName:any){
   console.log(this.sortDir);
   console.log(colName);
   
      if(this.sortDir==-1){
        console.log(typeof this.cols);
       
        
        let sortedProducts = this.cols.sort(
          (p1, p2) => (p1[colName]< p2[colName]) ? 1 : (p1[colName]> p2[colName]) ? -1 : 0);
          console.log(sortedProducts);
        }
        else {
          console.log("test");
          
          let sortedAscendingProducts = this.cols.sort(
            (p1, p2) => (p1[colName] > p2[colName] ) ? 1 : (p1[colName] < p2[colName] ) ? -1 : 0);
            console.log(sortedAscendingProducts);
          }
  
  }
}
