import { Component, OnInit } from '@angular/core';
import { navItems } from '../../nav';
import { UserService } from '../../services/user.service';




@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  showit:Boolean=false;
  public sidebarMinimized = false;
  showitFn() {
    this.showit = !this.showit;
  }
  mod
  constructor(private userService: UserService,
    ) { }

    public navItems = navItems;
    paperTnCSigned:any
  ngOnInit(): void {
    this.paperTnCSigned=this.userService.userValue.paperTnCSigned
    if(this.paperTnCSigned)
    {
     
      this.navItems.splice(1,1);
    }

    // if(this.isReseller && !this.isMasterMerchant){
    // this.resellerNav();
    // }
    // if(!this.showLedger){
    //   console.log(this.merchantType);
    //   this.ledgerViewHide()
    // }
    // if(!this.isSplitMerchant){
    //   this.navItems[6]?.children.splice(2,1);
    // }
    
    // if(this.isSplitMerchant && this.isBial){
    //   this.navItems[6].children[2].name=this.navItems[6]?.children[1].name
    //   this.navItems[6]?.children.splice(1,1)
    // }

    // if(this.isReseller&&this.isMasterMerchant){
    //   this.masterMerchantNav()
    // }
    
    // this.filterNavbar();
    

    // if(Number(localStorage.getItem('serviceProcount')) === 0 ){
    //   this.sproviderViewhide();
    // }
    //  console.log(Number(localStorage.getItem('isMerchantRouting')));
     
    // if(Number(localStorage.getItem('isMerchantRouting')) === 0 ){
    //   console.log("check 0,1");
      
    //   this.merchantRoutingViewHide();
    // }
    
  }

  // resellerNav(){
  //   if(this.isReseller){
  //      this.navItems[6]?.children.splice(1,1);
  //      this.navItems[9]?.children.splice(0,2);
  //      if(!this.isSplitMerchant) this.navItems[6].children.splice(1,1);
  //      if(!this.showLedger){
  //       console.log(this.navItems[6]);
  //       this.navItems[6].children.splice(3,2);
  //      }
  //       this.navItems=this.navItems.filter(item=>item.name=="Dashboard" ||
  //       item.name=="User Managment" || item.name=="Transaction" || item.name=="Reports" 
  //       || item.name=='Invoice' || item.name=="Service-Provider"
  //       )
  //       console.log(this.navItems);
  //       }
  //       else{
  //         return;
  //       }
  // }

  // masterMerchantNav(){
  //   this.navItems[9]?.children.splice(0,2)
  //   this.navItems=this.navItems.filter(item=>item.name=="Dashboard" ||
  //       item.name=="User Managment" || item.name=="Transaction" || item.name=="Settlement" || item.name=="Reports" 
  //       || item.name=='Invoice'
  //       )
  // }
  
  //hdfc functionality
 
 
  // hdfcViewHide(){
  //   console.log("c");
  //   for(let a=0;a<this.navItems.length;a++){
  //     if(this.navItems[a].name=="Single Invoice Creation"){
  //       this.navItems.splice(a,1);
  //       }
  //       if(this.navItems[a].name=="Invoice Upload"){
  //         this.navItems.splice(a,1);
  //         }
  //         if(this.navItems[a].name=="Refund Upload"){       
  //           this.navItems.splice(a,1)
  //           }
  //     }
  // }

  // merchantRoutingViewHide(){
  //   console.log(this.navItems);
    
   
    
  //     for(let a=0;a<this.navItems.length;a++){
  //     if(this.navItems[a].name=="Merchant Routing"){
  //       console.log(this.navItems[a].name);
  //       this.navItems.splice(a,1);
  //       }
    
  // }
  // console.log(this.navItems);
  // }
  // sproviderViewhide(){
  //   for(let a=0;a<this.navItems.length;a++){
  //       if(this.navItems[a].name=="Service Provider" && this.navItems[a].url=='/service-provider'){
  //         console.log(this.navItems[a]);
  //         this.navItems.splice(a,1)
  //         }
  //       }
  // }
  // ledgerViewHide(){
  //   console.log(this.navItems[6]);
  //   this.navItems[6]?.children.splice(5,2)
  //   for(let a=0;a<this.navItems.length;a++){
  //     if(this.navItems[a].name=="Merchant Ledger"){
  //       console.log(this.navItems[a]);
  //       this.navItems.splice(a,1)
  //       }
  //     }
  //     this.topUpViewHide()
  // }

  // topUpViewHide(){
  //   for(let a=0;a<this.navItems.length;a++){
  //     if(this.navItems[a].name=="Top-up Statement"){
  //       console.log(this.navItems[a]);
  //       this.navItems.splice(a,1)
  //       }
  //     }
  // }

  // detailSettlementReportHide(){
  //   this.navItems[6]?.children.splice(2,1);
  // }

  // createForm() {
    // this.shortCode = this.userService.userValue.shortCode;
  //   this.contactForm = this.formBuilder.group(
  //     {

  //       businessOwnerEmail: [
  //         this.profileData?.businessOwnerEmail,
  //         [
  //           Validators.required,
  //           Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  //         ],
  //       ],
  //       techSupportEmail: [
  //         this.profileData?.techSupportEmail,
  //         [
  //           Validators.required,
  //           Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  //         ],
  //       ],
  //       mobileNo: [this.profileData?.mobileNo, [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
  //       addressLine1_2: [this.profileData?.addressLine1_2, 
  //         [Validators.required,
          
  //         Validators.pattern("^[a-zA-Z][a-zA-Z0-9 .,#;:'-]{1,40}$"
  //         )]
  //       ],
  //       merchantid: [this.userService.userValue.merchantId]
  //     }
  //   );
  // }
  // isNumber(evt) {
  //   evt = evt ? evt : window.event;
  //   var charCode = evt.which ? evt.which : evt.keyCode;
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //     return false;
  //   }
  //   return true;
  // }

  // getProfileRelatedData() {
  //   this.getProfileData();
  //   this.getMerchantIconUrl();
  // }

  // filterNavbar() {
  //   this.token = this.userService.userValue;

  //   for (let i = 0; i < navItems.length; i++) {
   
  //     if (!this.checkPermission(this.token?.actions, navItems[i].permissions)) {
  //       navItems[i] = {};
  //     }
      
     
      // console.log(navItems[i]);
      
      // if (this.navItems[i].name == "Payout Accounts") {
      //   if (this.collection.length > 0) {
      //     this.navItems[i].children;
      //     let abc = [];
      //     for (let i = 0; i < this.collection.length; i++) {
      //       abc.push({
      //         name: this.collection[i].virtualAccountID,
      //         url: '/virtual-accounts',
      //         icon: 'fa fa-server',
      //         permissions: [RoleAccess.viewVirtualAccounts],
      //         children: [
      //           {
      //             name: "Close",
      //             url: '/virtual-accounts',
      //             icon: 'fa fa-trash',
      //             permissions: [RoleAccess.editVirtualAccount],
      //           },
      //         ]
      //       })
      //     }
      //     this.navItems[i].children = abc;
      //   }
      // }
  //     if (navItems[i]?.children) {
  //       for (let j = 0; j < navItems[i]?.children?.length; j++) {
  //         if (!this.checkPermission(this.token.actions, navItems[i]?.children[j]?.permissions)) {
  //           navItems[i].children[j] = {};
  //         }
  //       }
  //     }
  //     if (i == (navItems.length - 1)) {
  //       this.showNav = true;
  //     }
  //   }
  // }

  // checkPermission(from, inn) {
   
    
  //   let flag = false;
  //   for (let i = 0; i < from?.length; i++) {
  //     for (let j = 0; j < inn?.length; j++) {
  //       if (from[i] == inn[j]) {
  //         flag = true;
  //       }
  //     }
  //     if (i == (from.length - 1)) {
  //       return flag;
  //     }
  //   }
  // }

  // getProfileData() {
  //   this.dashboardService.getProfileData({ merchantid: this.userService.userValue.merchantId }).subscribe((data: any) => {
  //     this.profileData = data[0];
  //     this.createForm();
  //   })
  // }
  // showName = false;
  // updateUrl(event) {
  //   if (event.type == "error") {
  //     this.showName = true;
  //   }
  // }


  // getMerchantIconUrl() {
  //   this.dashboardService.getMerchantIconUrl().subscribe((data: any) => {


  //     this.merchantImagePath = data.imagePath;
  //     this.merchantImagePath = location.origin + "/" + this.merchantImagePath +
  //       "/" + this.merchId + '.png';
  //   })
  // }

  logout() {
    this.userService.logout();
  }

  closeNav() {
    this.showit = false;
  }

  // businessDetailsToggleFn() {
  //   this.businessDetailsToggle = !this.businessDetailsToggle;
  //   this.contactDetailsToggle = false;
  //   this.activationDetailsToggle = false;
  //   this.bankAccountDetailsToggle = false;
  // }
  // contactDetailsToggleFn() {
  //   this.contactDetailsToggle = !this.contactDetailsToggle;
  //   this.businessDetailsToggle = false;
  //   this.activationDetailsToggle = false;
  //   this.bankAccountDetailsToggle = false;
  // }
  // activationDetailsToggleFn() {
  //   this.activationDetailsToggle = !this.activationDetailsToggle;
  //   this.businessDetailsToggle = false;
  //   this.contactDetailsToggle = false;
  //   this.bankAccountDetailsToggle = false;
  // }
  // bankAccountDetailsToggleFn() {
  //   this.bankAccountDetailsToggle = !this.bankAccountDetailsToggle;
  //   this.businessDetailsToggle = false;
  //   this.contactDetailsToggle = false;
  //   this.activationDetailsToggle = false;
  // }
  // onEdit(template) {
  //   this.modalRef = this.modalService.show(template);
  // }
  // get f() {
  //   return this.contactForm.controls;
  // }
  // updateContact() {
  //   this.formSubmitted = true;
  //   if (this.contactForm.invalid) {
  //     return;
  //   }
  //   this.userService.updateContactDetails(this.contactForm.value).subscribe((data: any) => {
  //     this.notificationService.showSuccess("Contact Details Updated", "");
  //     this.getProfileData();
  //     this.modalRef.hide();
  //   })
  // }


  // getAlertsData() {
  //   this.dashboardService.getAlertData({ merchantID: this.userService.userValue.merchantId}).subscribe((data: any) => {
  //     this.alertData = data;
  //     for(let i=0;i<this.alertData.length;i++){
  //       if(this.alertData[i].merchantID!='ALL'){
  //         this.mAlerts.push(this.alertData[i]);
  //         this.mAlerts[i].createdAt=new Date(this.mAlerts[i].createdAt).toLocaleString('en-US', { timeZone: "UTC" });
          
  //       }
  //     }
  //     if(localStorage.length==2 || localStorage.length==3){
  //     this.checkk()
  //     }
  //   })
  // }

  // removeCount(){
  // this.nCount='';
  // localStorage.removeItem('count')
  // this.check()
  // }
  
  // check(){
  //   localStorage.setItem('count1','1');
  //   localStorage.setItem('count2','2');
  // }

  // checkk(){
  //   setTimeout(() => {
  //   this.nCount= this.mAlerts.length;
  //   localStorage.setItem('count',this.mAlerts.length)
  //   this.nCount=localStorage.getItem('count');
  //   }, 1000);
  //   // console.log(localStorage.length);
  //   }
  error;

  token;
  showNav = false;
  filterNavbar() {
    this.token = this.userService.userValue;
    console.log(navItems)

    for (let i = 0; i < navItems.length; i++) {

      if (!this.checkPermission(this.token?.actions, navItems[i].permissions)) {
        navItems[i] = {};
      }
      // if (this.navItems[i].name == "Payout Accounts") {
      //   if (this.collection.length > 0) {
      //     this.navItems[i].children;
      //     let abc = [];
      //     for (let i = 0; i < this.collection.length; i++) {
      //       abc.push({
      //         name: this.collection[i].virtualAccountID,
      //         url: '/virtual-accounts',
      //         icon: 'fa fa-server',
      //         permissions: [RoleAccess.viewVirtualAccounts],
      //         children: [
      //           {
      //             name: "Close",
      //             url: '/virtual-accounts',
      //             icon: 'fa fa-trash',
      //             permissions: [RoleAccess.editVirtualAccount],
      //           },
      //         ]
      //       })
      //     }
      //     this.navItems[i].children = abc;
      //   }
      // }
      if (navItems[i]?.children) {
        for (let j = 0; j < navItems[i]?.children?.length; j++) {
          if (!this.checkPermission(this.token.actions, navItems[i]?.children[j]?.permissions)) {
            navItems[i].children[j] = {};
          }
        }
      }
      if (i == (navItems.length - 1)) {
        this.showNav = true;
      }
    }
  }

  checkPermission(from, inn) {
    let flag = false;
    for (let i = 0; i < from?.length; i++) {
      for (let j = 0; j < inn?.length; j++) {
        if (from[i] == inn[j]) {
          flag = true;
        }
      }
      if (i == (from.length - 1)) {
        return flag;
      }
    }
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  }