function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{mvRQ:function(t,e,n){"use strict";n.r(e),n.d(e,"TransfersModule",(function(){return G}));var a,c=n("SVse"),i=n("kFe1"),r=n("xkgV"),o=n("iInd"),l=n("wd/R"),s=n("s7LF"),u=n("XNiG"),d=n("8Y7J"),f=n("OC8m"),m=n("qfBg"),h=n("LqlI"),b=n("IheW"),g=((a=function(){function t(e,n){_classCallCheck(this,t),this.http=e,this.userService=n}return _createClass(t,[{key:"getAllTransfers",value:function(t,e,n){return console.log(n),this.http.post("".concat(this.userService.urlValue.url,"/api/transfer/list?limit=").concat(t,"&offset=").concat(e),n)}}]),t}()).\u0275fac=function(t){return new(t||a)(d.fc(b.b),d.fc(m.a))},a.\u0275prov=d.Rb({token:a,factory:a.\u0275fac,providedIn:"root"}),a);function p(t,e){if(1&t&&(d.bc(0,"option",22),d.Qc(1),d.ac()),2&t){var n=e.$implicit;d.uc("value",n.id),d.Ib(1),d.Tc("",n.id," ",n.name," ")}}var v=function(){return{standalone:!0}};function I(t,e){if(1&t){var n=d.cc();d.bc(0,"div",10),d.bc(1,"label",7),d.Qc(2,"Merchant ID"),d.ac(),d.bc(3,"select",20),d.jc("ngModelChange",(function(t){return d.Ic(n),d.nc().merchantId=t})),d.Oc(4,p,2,3,"option",21),d.ac(),d.ac()}if(2&t){var a=d.nc();d.Ib(3),d.uc("ngModelOptions",d.xc(3,v))("ngModel",a.merchantId),d.Ib(1),d.uc("ngForOf",a.merchData)}}function O(t,e){if(1&t&&(d.bc(0,"span"),d.Qc(1),d.ac()),2&t){var n=d.nc().$implicit;d.Ib(1),d.Sc(" ",n.label," \xa0 ")}}function C(t,e){if(1&t&&(d.bc(0,"th"),d.Zb(1,25),d.Oc(2,O,2,1,"span",26),d.Yb(),d.ac()),2&t){var n=e.$implicit;d.Ib(1),d.uc("ngSwitch",n.field)}}function y(t,e){if(1&t&&(d.bc(0,"div"),d.Qc(1),d.ac()),2&t){var n=d.nc().$implicit,a=d.nc().$implicit;d.Ib(1),d.Rc(a[n.field])}}function S(t,e){if(1&t&&(d.bc(0,"div"),d.Qc(1),d.oc(2,"date"),d.ac()),2&t){var n=d.nc().$implicit,a=d.nc().$implicit;d.Ib(1),d.Rc(d.qc(2,1,a[n.field],"dd/MM/yyyy h:mma"))}}function D(t,e){if(1&t&&(d.bc(0,"span"),d.Qc(1),d.oc(2,"number"),d.ac()),2&t){var n=d.nc(2).$implicit;d.Ib(1),d.Rc(d.qc(2,1,n.settlementAmount,"1.2-2"))}}function w(t,e){1&t&&(d.bc(0,"span",30),d.Qc(1,"Initiated"),d.ac())}function P(t,e){1&t&&(d.bc(0,"span",31),d.Qc(1,"paid"),d.ac())}function x(t,e){if(1&t&&(d.bc(0,"span"),d.Qc(1),d.oc(2,"date"),d.ac()),2&t){var n=d.nc(2).$implicit;d.Ib(1),d.Rc(d.qc(2,1,n.actualSettlementDate,"dd/MM/yyyy"))}}function k(t,e){if(1&t&&(d.bc(0,"td"),d.Oc(1,y,2,1,"div",27),d.Oc(2,S,3,4,"div",27),d.Oc(3,D,3,4,"span",27),d.Oc(4,w,2,0,"span",28),d.Oc(5,P,2,0,"span",29),d.Oc(6,x,3,4,"span",27),d.ac()),2&t){var n=e.$implicit,a=d.nc().$implicit;d.Ib(1),d.uc("ngIf","createdDateTime"!=n.field&&"amount"!==n.field&&"status"!==n.field&&"actualSettlementDate"!==n.field),d.Ib(1),d.uc("ngIf","createdDateTime"==n.field),d.Ib(1),d.uc("ngIf","amount"===n.field),d.Ib(1),d.uc("ngIf","status"===n.field&&null===a.utr),d.Ib(1),d.uc("ngIf","status"===n.field&&null!==a.utr),d.Ib(1),d.uc("ngIf","actualSettlementDate"===n.field&&null!==a.actualSettlementDate)}}function T(t,e){if(1&t&&(d.bc(0,"tr"),d.Oc(1,k,7,6,"td",24),d.ac()),2&t){var n=d.nc(2);d.Ib(1),d.uc("ngForOf",n.cols)}}var M=function(t,e,n){return{itemsPerPage:t,currentPage:e,totalItems:n}};function Q(t,e){if(1&t&&(d.bc(0,"table",23),d.bc(1,"thead"),d.bc(2,"tr"),d.Oc(3,C,3,1,"th",24),d.ac(),d.ac(),d.bc(4,"tbody"),d.Oc(5,T,2,1,"tr",24),d.oc(6,"paginate"),d.ac(),d.ac()),2&t){var n=d.nc();d.Ib(3),d.uc("ngForOf",n.cols),d.Ib(2),d.uc("ngForOf",d.qc(6,2,n.dummyData,d.Ac(5,M,n.itemsPerPage,n.page,n.count)))}}function _(t,e){1&t&&(d.bc(0,"h4",32),d.Qc(1,"No data found !"),d.ac())}function F(t,e){if(1&t){var n=d.cc();d.bc(0,"div",40),d.jc("click",(function(){d.Ic(n);var t=e.$implicit;return d.nc(2).itemOnPage(t)})),d.Qc(1),d.ac()}if(2&t){var a=e.$implicit,c=d.nc(2);d.uc("ngClass",c.itemsPerPage==a?"item-number-active":"item-number"),d.Ib(1),d.Sc(" ",a," ")}}function R(t,e){if(1&t&&(d.bc(0,"span",41),d.Qc(1),d.ac()),2&t){var n=d.nc(2);d.Ib(1),d.Sc("Total Amount-",n.amount," ")}}function A(t,e){if(1&t&&(d.bc(0,"span",41),d.Qc(1),d.ac()),2&t){var n=d.nc(2);d.Ib(1),d.Sc(" Total Count-",n.count,"")}}function V(t,e){if(1&t){var n=d.cc();d.bc(0,"div",33),d.bc(1,"div",5),d.bc(2,"div",34),d.bc(3,"span",35),d.Qc(4," Show "),d.ac(),d.Oc(5,F,2,2,"div",36),d.bc(6,"span",35),d.Qc(7," entries per page "),d.ac(),d.ac(),d.bc(8,"div",37),d.Oc(9,R,2,1,"span",38),d.Wb(10,"br"),d.Oc(11,A,2,1,"span",38),d.bc(12,"pagination-controls",39),d.jc("pageChange",(function(t){return d.Ic(n),d.nc().pageChanged(t)})),d.ac(),d.ac(),d.ac(),d.ac()}if(2&t){var a=d.nc();d.Ib(5),d.uc("ngForOf",a.entriesOnPage),d.Ib(4),d.uc("ngIf",a.amount),d.Ib(2),d.uc("ngIf",a.count)}}function E(t,e){if(1&t&&(d.bc(0,"span"),d.Qc(1),d.ac()),2&t){var n=d.nc().$implicit;d.Ib(1),d.Sc(" ",n.label," \xa0 ")}}function L(t,e){if(1&t&&(d.bc(0,"th"),d.Zb(1,25),d.Oc(2,E,2,1,"span",26),d.Yb(),d.ac()),2&t){var n=e.$implicit;d.Ib(1),d.uc("ngSwitch",n.field)}}function j(t,e){if(1&t&&(d.bc(0,"tr"),d.bc(1,"td"),d.Qc(2),d.ac(),d.bc(3,"td"),d.Qc(4),d.ac(),d.bc(5,"td"),d.Qc(6),d.ac(),d.bc(7,"td"),d.Qc(8),d.ac(),d.bc(9,"td"),d.Qc(10),d.ac(),d.ac()),2&t){var n=d.nc(2);d.Ib(2),d.Rc(null==n.detailss?null:n.detailss.totalAmount),d.Ib(2),d.Rc(null==n.detailss?null:n.detailss.adjustments),d.Ib(2),d.Rc(null==n.detailss?null:n.detailss.totalNetAmountToBePaid),d.Ib(2),d.Rc(null==n.detailss?null:n.detailss.totalTxnCharges),d.Ib(2),d.Rc(null==n.detailss?null:n.detailss.totalServiceTax)}}function N(t,e){1&t&&(d.bc(0,"tr"),d.bc(1,"td"),d.Qc(2,"-"),d.ac(),d.bc(3,"td"),d.Qc(4,"-"),d.ac(),d.bc(5,"td"),d.Qc(6,"-"),d.ac(),d.bc(7,"td"),d.Qc(8,"-"),d.ac(),d.bc(9,"td"),d.Qc(10,"-"),d.ac(),d.ac())}function $(t,e){if(1&t){var n=d.cc();d.bc(0,"div",42),d.bc(1,"h6"),d.Wb(2,"i",43),d.Qc(3," Details"),d.ac(),d.bc(4,"button",44),d.jc("click",(function(){return d.Ic(n),d.nc().modalRef.hide()})),d.bc(5,"span",45),d.Qc(6,"\xd7"),d.ac(),d.ac(),d.ac(),d.bc(7,"div",46),d.bc(8,"table",23),d.bc(9,"thead"),d.bc(10,"tr"),d.Oc(11,L,3,1,"th",24),d.ac(),d.ac(),d.bc(12,"tbody"),d.Oc(13,j,11,5,"tr",47),d.Oc(14,N,11,0,"ng-template",null,48,d.Pc),d.ac(),d.ac(),d.ac()}if(2&t){var a=d.Fc(15),c=d.nc();d.Ib(11),d.uc("ngForOf",c.cols1),d.Ib(2),d.uc("ngIf",null!=c.detailss.totalAmount||null!=(null==c.detailss?null:c.detailss.adjustments)||null!=c.detailss.totalNetAmountToBePaid||null!=c.detailss.totalTxnCharges||null!=c.detailss.totalServiceTax)("ngIfElse",a)}}var q,B,W,z=[{path:"",component:(q=function(){function t(e,n,a,c,i){_classCallCheck(this,t),this.formBuilder=e,this.notificationService=n,this.userService=a,this.modalService=c,this.transferService=i,this.title="angular-ngx-daterangepicker-material-app",this.formSubmitted=!1,this.selected={startDate:l("00:00","HH:mm").subtract(10,"days"),endDate:l("23:59","HH:mm")},this.detailss=[],this.loading=!1,this.cols=[{label:"Merchant ID",field:"merchantId",sortOptions:"",sort:"text"},{label:"Created Date Time",field:"createdDateTime",sortOptions:"",sort:"number"},{label:"Instruction Type",field:"instructionType",sortOptions:"",sort:"text"},{label:"Settlement Batch No",field:"settlementBatchNo",sortOptions:"",sort:"number"},{label:"Transfer Date",field:"actualSettlementDate",sortOptions:"",sort:"number"},{label:"Amount",field:"amount",sortOptions:"",sort:"number"},{label:"UTR No",field:"utr",sortOptions:"",sort:"number"},{label:"Status",field:"status",sortOptions:"",sort:"text"}],this.cols1=[{label:"Total Settlement Amount",field:"totalAmount",sortOptions:"",sort:"number"},{label:"Adjustments",field:"adjustments",sortOptions:"",sort:"number"},{label:"Net Amount Settled",field:"totalNetAmountToBePaid",sortOptions:"",sort:"number"},{label:"Transaction Charges",field:"totalTxnCharges",sortOptions:"",sort:"number"},{label:"Service Tax",field:"totalServiceTax",sortOptions:"",sort:"number"}],this.numberSortOptions=[{name:"Sort 0 to 9",value:"ASC",img:"a-z"},{name:"Sort 9 to 0",value:"DESC",img:"z-a"}],this.offset=0,this.dummyData=[],this.reportData=[],this.itemsPerPage=10,this.page=1,this.entriesOnPage=[5,10,15,20],this.searchCriteria={},this.ranges={Today:[l(),l()],"Last 7 Days":[l().subtract(6,"days"),l()],"Last 30 Days":[l().subtract(29,"days"),l()],"Last 3 Month":[l().subtract(3,"month").startOf("month"),l().subtract(1,"month").endOf("month")],"Last 6 Months":[l().subtract(6,"month").startOf("month"),l().subtract(1,"month").endOf("month")]},this.textSortOptions=[{name:"Sort A to Z",value:"ASC",img:"a-z"},{name:"Sort Z to A",value:"DESC",img:"z-a"}]}return _createClass(t,[{key:"ngOnInit",value:function(){this.loggedInUser=this.userService.userValue,this.merchantIds=["ALL"].concat(this.userService.userValue.merchantIds),this.merchantId="ALL",this.merchData=this.userService.userValue.merchants,this.createForm(),this.search(!1),this.onClose=new u.a}},{key:"createForm",value:function(){this.searchForm=this.formBuilder.group({searchDate:["",[s.y.required]],utrN:["",[s.y.required]],merchantID:["",s.y.required]})}},{key:"pageChanged",value:function(t){this.page=t,this.search(!1)}},{key:"itemOnPage",value:function(t){this.page=0,this.itemsPerPage=t,this.search(!1)}},{key:"setSortOption",value:function(t,e){var n=this;this.cols.forEach((function(a){t===a.field&&(a.sortOptions=e,n.selectedSortOption=e)}))}},{key:"sortingClick",value:function(t){this.sortField=this.selectedField,this.customSort({field:this.selectedField,order:"ASC"===t?1:-1,data:this.dummyData})}},{key:"customSort",value:function(t){this.sortField.length>0&&(t.data&&t.data.sort((function(e,n){var a,c=e[t.field],i=n[t.field];return a=null==c&&null!=i?-1:null!=c&&null==i?1:null==c&&null==i?0:"string"==typeof c&&"string"==typeof i?c.localeCompare(i):c<i?-1:c>i?1:0,t.order*a})),this.sortField="")}},{key:"search",value:function(t){var e,n,a=this;1==t&&(this.page=1),null==this.searchForm.value.searchDate.startDate&&null==this.searchForm.value.searchDate.endDate?(e=this.selected.startDate,n=this.selected.endDate):(e=this.searchForm.value.searchDate.startDate,n=this.searchForm.value.searchDate.endDate);var c=new Date(e).getTime()/1e3,i=new Date(n).getTime()/1e3,r=Object.assign(Object.assign(Object.assign({fromDate:c,toDate:i,utr:this.searchForm.value.utrN,merchantId:this.merchantId?this.merchantId:this.userService.userValue.merchantIds},"ALL"==this.merchantId&&"SERVICE_PROVIDER"==this.userService.userValue.userType?{merchantIds:this.userService.userValue.merchantIds}:null),"ALL"!=this.merchantId&&"SERVICE_PROVIDER"==this.userService.userValue.userType?{merchantIds:[this.merchantId]}:null),"SERVICE_PROVIDER"==this.userService.userValue.userType?{providerId:this.userService.userValue.providerId}:null),o=this.page;this.page>0&&(o=this.page-1),this.transferService.getAllTransfers(this.itemsPerPage,o,r).subscribe((function(t){console.log(t),a.dummyData=t.data}))}}]),t}(),q.\u0275fac=function(t){return new(t||q)(d.Vb(s.c),d.Vb(f.a),d.Vb(m.a),d.Vb(h.b),d.Vb(g))},q.\u0275cmp=d.Pb({type:q,selectors:[["app-transfers"]],decls:28,vars:16,consts:[[1,"container-fluid","p-0",2,"height","100vh"],[1,"row","box","mt-3"],[1,"col-md-12","card-header",2,"font-weight","700"],[1,"fa","fa-th-list","ml-2",2,"font-weight","700"],[1,"col-md-12",3,"formGroup"],[1,"row"],[1,"col-md-5","p-4","mr-2"],[2,"font-weight","500"],["id","calendar-input","type","text","ngxDaterangepickerMd","",1,"form-control",3,"formControl","dateLimit","ngModel","autoApply","showCustomRangeLabel","alwaysShowCalendars","timePicker","timePicker24Hour","ranges","linkedCalendars","keepCalendarOpeningWithRange","ngModelChange"],["id","icon","for","calendar-input",1,"date-range-picker-icon","fa","fa-calendar"],[1,"col-md-2","p-4"],["type","text","formControlName","utrN",1,"form-control"],["class","col-md-2 p-4",4,"ngIf"],[1,"col-md-2","mt-5"],[1,"btn",2,"background-color","rgb(49, 179, 230)","color","white",3,"click"],[1,"col-md-12",2,"overflow-x","scroll"],["class","table table-striped table-hover table-responsive-lg",4,"ngIf","ngIfElse"],["other_content",""],["class","container-fluid mt-3",4,"ngIf"],["template1",""],["ngDefaultControl","",1,"custom-select","mb-2","mr-sm-2","mb-sm-0",3,"ngModelOptions","ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"table","table-striped","table-hover","table-responsive-lg"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngSwitchDefault"],[4,"ngIf"],["class","badge badge-warning text-white",4,"ngIf"],["class","badge badge-success",4,"ngIf"],[1,"badge","badge-warning","text-white"],[1,"badge","badge-success"],[1,"p-4",2,"text-align","center","color","lightgray"],[1,"container-fluid","mt-3"],[1,"col-md-4","d-inline-flex"],[1,"p-2",2,"font-weight","700","color","lightslategray"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col-md-8","myDiv1"],["style","font-weight: 700;  color: lightslategray;padding-left: 150px;",4,"ngIf"],[1,"float-right","mDiv",3,"pageChange"],[3,"ngClass","click"],[2,"font-weight","700","color","lightslategray","padding-left","150px"],[1,"modal-header"],[1,"fa","fa-align-justify","ml-2"],["type","button","aria-label","Close",1,"close","pull-right",3,"click"],["aria-hidden","true"],[1,"modal-body"],[4,"ngIf","ngIfElse"],["change_content",""]],template:function(t,e){if(1&t&&(d.bc(0,"div",0),d.bc(1,"div",1),d.bc(2,"div",2),d.Wb(3,"i",3),d.Qc(4,"TRANSFERS "),d.ac(),d.bc(5,"form",4),d.bc(6,"div",5),d.bc(7,"div",6),d.bc(8,"label",7),d.Qc(9,"Duration:"),d.ac(),d.bc(10,"input",8),d.jc("ngModelChange",(function(t){return e.selected=t})),d.ac(),d.Wb(11,"label",9),d.ac(),d.bc(12,"div",10),d.bc(13,"label",7),d.Qc(14,"UTR No."),d.ac(),d.Wb(15,"input",11),d.ac(),d.Oc(16,I,5,4,"div",12),d.bc(17,"div",13),d.bc(18,"button",14),d.jc("click",(function(){return e.search(!0)})),d.Qc(19,"Search"),d.ac(),d.ac(),d.ac(),d.ac(),d.ac(),d.bc(20,"div",1),d.bc(21,"div",15),d.Oc(22,Q,7,9,"table",16),d.Oc(23,_,2,0,"ng-template",null,17,d.Pc),d.ac(),d.Oc(25,V,13,3,"div",18),d.ac(),d.ac(),d.Oc(26,$,16,3,"ng-template",null,19,d.Pc)),2&t){var n=d.Fc(24);d.Ib(5),d.uc("formGroup",e.searchForm),d.Ib(5),d.uc("formControl",e.searchForm.controls.searchDate)("dateLimit",90)("ngModel",e.selected)("autoApply",!1)("showCustomRangeLabel",!1)("alwaysShowCalendars",!0)("timePicker",!1)("timePicker24Hour",!0)("ranges",e.ranges)("linkedCalendars",!0)("keepCalendarOpeningWithRange",!0),d.Ib(6),d.uc("ngIf","AGG"===e.loggedInUser.merchantType),d.Ib(6),d.uc("ngIf",e.dummyData.length>0)("ngIfElse",n),d.Ib(3),d.uc("ngIf",e.dummyData.length>0)}},directives:[s.A,s.o,s.h,i.a,s.b,s.n,s.e,s.f,c.n,s.x,s.q,c.m,s.r,s.z,c.p,c.r,r.c,c.l],pipes:[r.b,c.e,c.f],styles:[".bnt[_ngcontent-%COMP%]{font-size:14px}.box[_ngcontent-%COMP%]{background-color:#fff}.item-number[_ngcontent-%COMP%], .item-number-active[_ngcontent-%COMP%]{display:inline-block;border:1px solid hsla(0,0%,50.2%,.7);padding-left:9px;padding-right:9px;padding-top:2px;height:30px;cursor:pointer;margin:1px}.item-number-active[_ngcontent-%COMP%]{background-color:#2199e8;color:#fff}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{text-align:center}td[_ngcontent-%COMP%]{padding:5px}.dropdown-menu[_ngcontent-%COMP%]{min-width:0}.show-data[_ngcontent-%COMP%]{overflow-x:scroll}#icon[_ngcontent-%COMP%]{float:right;margin-top:-24px;font-size:17px;padding-right:8px}  .md-drppicker{width:600px!important}th[_ngcontent-%COMP%]{border-top:none;white-space:nowrap;padding:.4rem}.modal-body[_ngcontent-%COMP%]{overflow-x:scroll;padding:3px!important}.modal-header[_ngcontent-%COMP%]{background-color:#f2f2f2}.mDiv[_ngcontent-%COMP%]{margin-top:-20px}@media screen and (min-width:700px) and (max-width:1384px){.mDiv[_ngcontent-%COMP%]{margin-top:-40px;margin-left:300px}.myDiv1[_ngcontent-%COMP%]{float:right}}"]}),q)}],H=((W=function t(){_classCallCheck(this,t)}).\u0275mod=d.Tb({type:W}),W.\u0275inj=d.Sb({factory:function(t){return new(t||W)},imports:[[o.g.forChild(z)],o.g]}),W),G=((B=function t(){_classCallCheck(this,t)}).\u0275mod=d.Tb({type:B}),B.\u0275inj=d.Sb({factory:function(t){return new(t||B)},imports:[[c.c,H,r.a,s.v,s.i,i.b.forRoot()]]}),B)}}]);