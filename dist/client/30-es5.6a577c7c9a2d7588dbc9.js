function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{LFR9:function(t,e,n){"use strict";n.r(e),n.d(e,"TopUpModule",(function(){return W}));var c,a=n("SVse"),i=n("kFe1"),r=n("iInd"),o=n("wd/R"),l=n("s7LF"),s=n("XNiG"),u=n("orU0"),d=n("8Y7J"),f=n("OC8m"),p=n("qfBg"),h=n("IheW"),b=((c=function(){function t(e,n){_classCallCheck(this,t),this.http=e,this.userService=n}return _createClass(t,[{key:"getTopUpList",value:function(t){return this.http.post(this.userService.urlValue.url+"/api/merchant-ledger/merchant-top-up-statement-list",t)}}]),t}()).\u0275fac=function(t){return new(t||c)(d.fc(h.b),d.fc(p.a))},c.\u0275prov=d.Rb({token:c,factory:c.\u0275fac,providedIn:"root"}),c),m=n("xkgV"),g=function(){return{format:"DD/MM/YYYY"}};function v(t,e){if(1&t&&(d.bc(0,"div",23),d.Wb(1,"input",24),d.Wb(2,"label",25),d.ac()),2&t){var n=d.nc();d.Ib(1),d.uc("formControl",n.searchForm.controls.searchDate)("locale",d.xc(11,g))("dateLimit",90)("autoApply",!1)("showCustomRangeLabel",!1)("alwaysShowCalendars",!0)("timePicker",!0)("timePicker24Hour",!0)("ranges",n.ranges)("linkedCalendars",!0)("keepCalendarOpeningWithRange",!0)}}function y(t,e){1&t&&(d.bc(0,"div",23),d.Wb(1,"input",26),d.Wb(2,"label",25),d.ac())}function O(t,e){if(1&t&&(d.bc(0,"span"),d.Qc(1),d.ac()),2&t){var n=d.nc().$implicit;d.Ib(1),d.Sc(" ",n.label," \xa0 ")}}function I(t,e){if(1&t&&(d.bc(0,"th"),d.Zb(1,29),d.Oc(2,O,2,1,"span",30),d.Yb(),d.ac()),2&t){var n=e.$implicit;d.Ib(1),d.uc("ngSwitch",n.field)}}function C(t,e){if(1&t&&(d.bc(0,"div"),d.Qc(1),d.ac()),2&t){var n=d.nc().$implicit,c=d.nc().$implicit;d.Ib(1),d.Rc(c[n.field])}}function k(t,e){if(1&t&&(d.bc(0,"div"),d.Qc(1),d.oc(2,"date"),d.ac()),2&t){var n=d.nc().$implicit,c=d.nc().$implicit;d.Ib(1),d.Rc(d.qc(2,1,1e3*c[n.field],"dd/MM/yyyy"))}}function w(t,e){1&t&&(d.bc(0,"div"),d.Qc(1,"---"),d.ac())}function D(t,e){if(1&t&&(d.bc(0,"span"),d.Qc(1),d.oc(2,"number"),d.ac()),2&t){var n=d.nc(2).$implicit;d.Ib(1),d.Rc(d.qc(2,1,n.creditAmount,"1.2-2"))}}function S(t,e){if(1&t&&(d.bc(0,"span"),d.Qc(1),d.oc(2,"number"),d.ac()),2&t){var n=d.nc(2).$implicit;d.Ib(1),d.Rc(d.qc(2,1,n.currentBalance,"1.2-2"))}}function P(t,e){if(1&t&&(d.bc(0,"span"),d.Qc(1),d.oc(2,"number"),d.ac()),2&t){var n=d.nc(2).$implicit;d.Ib(1),d.Rc(d.qc(2,1,n.debitAmount,"1.2-2"))}}function x(t,e){if(1&t&&(d.bc(0,"td"),d.Oc(1,C,2,1,"div",31),d.Oc(2,k,3,4,"div",31),d.Oc(3,w,2,0,"div",31),d.Oc(4,D,3,4,"span",31),d.Oc(5,S,3,4,"span",31),d.Oc(6,P,3,4,"span",31),d.ac()),2&t){var n=e.$implicit,c=d.nc().$implicit;d.Ib(1),d.uc("ngIf","creditAmount"!=n.field&&"currentBalance"!==n.field&&"debitAmount"!==n.field&&"txnDate"!=n.field),d.Ib(1),d.uc("ngIf","txnDate"==n.field),d.Ib(1),d.uc("ngIf",null==c[n.field]&&"debit"!==n.field),d.Ib(1),d.uc("ngIf","creditAmount"===n.field),d.Ib(1),d.uc("ngIf","currentBalance"===n.field),d.Ib(1),d.uc("ngIf","debitAmount"===n.field)}}function M(t,e){if(1&t&&(d.bc(0,"tr"),d.Oc(1,x,7,6,"td",28),d.ac()),2&t){var n=d.nc(2);d.Ib(1),d.uc("ngForOf",n.cols)}}var _=function(t,e,n){return{itemsPerPage:t,currentPage:e,totalItems:n}};function F(t,e){if(1&t&&(d.bc(0,"table",27),d.bc(1,"thead"),d.bc(2,"tr"),d.Oc(3,I,3,1,"th",28),d.ac(),d.ac(),d.bc(4,"tbody"),d.Oc(5,M,2,1,"tr",28),d.oc(6,"paginate"),d.ac(),d.ac()),2&t){var n=d.nc();d.Ib(3),d.uc("ngForOf",n.cols),d.Ib(2),d.uc("ngForOf",d.qc(6,2,n.topUpList,d.Ac(5,_,n.itemsPerPage,n.page,n.count)))}}function L(t,e){1&t&&(d.bc(0,"h4",32),d.Qc(1,"No data found !"),d.ac())}function A(t,e){if(1&t){var n=d.cc();d.bc(0,"div",41),d.jc("click",(function(){d.Ic(n);var t=e.$implicit;return d.nc(2).itemOnPage(t)})),d.Qc(1),d.ac()}if(2&t){var c=e.$implicit,a=d.nc(2);d.uc("ngClass",a.itemsPerPage==c?"item-number-active":"item-number"),d.Ib(1),d.Sc(" ",c," ")}}function T(t,e){if(1&t&&(d.bc(0,"span",42),d.Qc(1),d.ac()),2&t){var n=d.nc(2);d.Ib(1),d.Sc("Total Amount-",n.amount," ")}}function Q(t,e){if(1&t&&(d.bc(0,"span",42),d.Qc(1),d.ac()),2&t){var n=d.nc(2);d.Ib(1),d.Sc(" Total Count-",n.count,"")}}function R(t,e){if(1&t){var n=d.cc();d.bc(0,"div",33),d.bc(1,"div",34),d.bc(2,"div",35),d.bc(3,"span",36),d.Qc(4," Show "),d.ac(),d.Oc(5,A,2,2,"div",37),d.bc(6,"span",36),d.Qc(7," entries per page "),d.ac(),d.ac(),d.bc(8,"div",38),d.Oc(9,T,2,1,"span",39),d.Wb(10,"br"),d.Oc(11,Q,2,1,"span",39),d.bc(12,"pagination-controls",40),d.jc("pageChange",(function(t){return d.Ic(n),d.nc().pageChanged(t)})),d.ac(),d.ac(),d.ac(),d.ac()}if(2&t){var c=d.nc();d.Ib(5),d.uc("ngForOf",c.entriesOnPage),d.Ib(4),d.uc("ngIf",c.amount),d.Ib(2),d.uc("ngIf",c.count)}}var U,$,V,q=[{path:"",component:(U=function(){function t(e,n,c,a){_classCallCheck(this,t),this.formBuilder=e,this.notificationService=n,this.userService=c,this.topupService=a,this.title="angular-ngx-daterangepicker-material-app",this.formSubmitted=!1,this.roleAccess=u.a,this.selected={startDate:o("00:00","HH:mm"),endDate:o("23:59","HH:mm")},this.detailss=[],this.loading=!1,this.isSynefo=!1,this.tipEnable=!1,this.defaultToday=!0,this.cols=[{label:"Date",field:"txnDate",sortOptions:"",sort:"number"},{label:"Description",field:"remarks",sortOptions:"",sort:"number"},{label:"Reference No",field:"referenceNo",sortOptions:"",sort:"number"},{label:"Debit",field:"debitAmount",sortOptions:"",sort:"number"},{label:"Credit",field:"creditAmount",sortOptions:"",sort:"number"},{label:"Balance",field:"currentBalance",sortOptions:"",sort:"number"}],this.numberSortOptions=[{name:"Sort 0 to 9",value:"ASC",img:"a-z"},{name:"Sort 9 to 0",value:"DESC",img:"z-a"}],this.offset=0,this.topUpList=[],this.reportData=[],this.itemsPerPage=10,this.page=1,this.entriesOnPage=[5,10,15,20],this.searchCriteria={},this.ranges={"Last 7 Days":[o().subtract(6,"days"),o()],"Last 30 Days":[o().subtract(29,"days"),o()],"Last 3 Month":[o().subtract(3,"month").startOf("month"),o().subtract(1,"month").endOf("month")],"Last 6 Months":[o().subtract(6,"month").startOf("month"),o().subtract(1,"month").endOf("month")]},this.textSortOptions=[{name:"Sort A to Z",value:"ASC",img:"a-z"},{name:"Sort Z to A",value:"DESC",img:"z-a"}]}return _createClass(t,[{key:"ngOnInit",value:function(){this.loggedInUser=this.userService.userValue,this.tipEnable=this.userService.userValue.tipEnabled,this.merchantIds=["ALL"].concat(this.userService.userValue.merchantIds),this.merchantId="ALL",this.merchData=this.userService.userValue.merchants,this.IsSynefoMerchant(),this.createForm(),this.search(!1),this.onClose=new s.a}},{key:"createForm",value:function(){this.searchForm=this.formBuilder.group({searchDate:["",[l.y.required]],utrN:["",[l.y.required]],merchantID:["",l.y.required]})}},{key:"pageChanged",value:function(t){this.page=t,this.search(!1)}},{key:"itemOnPage",value:function(t){this.page=0,this.itemsPerPage=t,this.search(!1)}},{key:"setSortOption",value:function(t,e){var n=this;this.cols.forEach((function(c){t===c.field&&(c.sortOptions=e,n.selectedSortOption=e)}))}},{key:"sortingClick",value:function(t){this.sortField=this.selectedField,this.customSort({field:this.selectedField,order:"ASC"===t?1:-1,data:this.topUpList})}},{key:"customSort",value:function(t){this.sortField.length>0&&(t.data&&t.data.sort((function(e,n){var c,a=e[t.field],i=n[t.field];return c=null==a&&null!=i?-1:null!=a&&null==i?1:null==a&&null==i?0:"string"==typeof a&&"string"==typeof i?a.localeCompare(i):a<i?-1:a>i?1:0,t.order*c})),this.sortField="")}},{key:"chekDateSelection",value:function(t){this.defaultToday="today"==t.target.value}},{key:"handleKeypress",value:function(t){return t.preventDefault(),!1}},{key:"search",value:function(t){var e,n,c=this;1==t&&(this.page=1),null==this.searchForm.value.searchDate.startDate&&null==this.searchForm.value.searchDate.endDate?(e=this.selected.startDate,n=this.selected.endDate):this.defaultToday?(e=this.selected.startDate,n=this.selected.endDate,console.log(this.searchForm.value)):(e=this.searchForm.value.searchDate.startDate,n=this.searchForm.value.searchDate.endDate);var a=new Date(e).getTime()/1e3,i=new Date(n).getTime()/1e3;this.page,this.page>0&&this.page,this.topupService.getTopUpList({fromDate:a,toDate:i,merchantType:this.userService.userValue.merchantType}).subscribe((function(t){c.topUpList=t.data,c.currentBalance=t.balance}))}},{key:"downloadReport",value:function(t,e){}},{key:"getMerchantList",value:function(){}},{key:"IsSynefoMerchant",value:function(){}},{key:"oopenModal",value:function(t,e){}}]),t}(),U.\u0275fac=function(t){return new(t||U)(d.Vb(l.c),d.Vb(f.a),d.Vb(p.a),d.Vb(b))},U.\u0275cmp=d.Pb({type:U,selectors:[["app-topup"]],decls:36,vars:11,consts:[[1,"container-fluid","p-0",2,"height","100vh"],[1,"row","box","mt-3"],[1,"col-md-12","card-header",2,"font-weight","700"],[1,"fa","fa-share-square","ml-2",2,"font-weight","700"],[1,"col-md-12",3,"formGroup"],[1,"mt-2"],[1,"row",2,"display","flex"],[1,"col-md-1","p-4","mt-2","ml-2"],["for","radio1",1,"form-check-label"],["type","radio","id","radio1","name","optradio","value","today",1,"form-check-input",3,"checked","change"],[1,"col-md-auto","mt-3","ml-2","p-0"],["for","radio2",1,"form-check-label"],["type","radio","id","radio2","name","optradio","value","otherDay",1,"form-check-input",3,"change"],["class","col-md-4 p-0 pt-4 mr-2 ",4,"ngIf"],[1,"col-md-2","mt-4"],[1,"btn",2,"background-color","rgb(49, 179, 230)","color","white",3,"click"],[1,"col","mb-3",2,"font-size","18px","font-weight","500","text-align","center"],[2,"font-weight","700"],[2,"color","rgb(49, 211, 49)","font-weight","700"],[1,"col-md-12",2,"overflow-x","scroll"],["class","table table-striped table-hover table-responsive-lg",4,"ngIf","ngIfElse"],["other_content",""],["class","container-fluid mt-3",4,"ngIf"],[1,"col-md-4","p-0","pt-4","mr-2"],["id","calendar-input","type","text","placeholder","Select Date Range","ngxDaterangepickerMd","",1,"form-control",3,"formControl","locale","dateLimit","autoApply","showCustomRangeLabel","alwaysShowCalendars","timePicker","timePicker24Hour","ranges","linkedCalendars","keepCalendarOpeningWithRange"],["id","icon","for","calendar-input",1,"date-range-picker-icon","fa","fa-calendar"],["disabled","true","readonly","","type","text","placeholder","Select Date Range",1,"form-control"],[1,"table","table-striped","table-hover","table-responsive-lg"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngSwitchDefault"],[4,"ngIf"],[1,"p-4",2,"text-align","center","color","lightgray"],[1,"container-fluid","mt-3"],[1,"row"],[1,"col-md-4","d-inline-flex"],[1,"p-2",2,"font-weight","700","color","lightslategray"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col-md-8","myDiv1"],["style","font-weight: 700;  color: lightslategray;padding-left: 150px;",4,"ngIf"],[1,"float-right","mDiv",3,"pageChange"],[3,"ngClass","click"],[2,"font-weight","700","color","lightslategray","padding-left","150px"]],template:function(t,e){if(1&t&&(d.bc(0,"div",0),d.bc(1,"div",1),d.bc(2,"div",2),d.Wb(3,"i",3),d.Qc(4,"Top-Up Account "),d.ac(),d.bc(5,"form",4),d.bc(6,"h5",5),d.Qc(7,"Select Duration :"),d.ac(),d.bc(8,"div",6),d.bc(9,"div",7),d.bc(10,"label",8),d.bc(11,"input",9),d.jc("change",(function(t){return e.chekDateSelection(t)})),d.ac(),d.Qc(12,"Today "),d.ac(),d.ac(),d.bc(13,"div",10),d.bc(14,"label",11),d.bc(15,"input",12),d.jc("change",(function(t){return e.chekDateSelection(t)})),d.ac(),d.ac(),d.ac(),d.Oc(16,v,3,12,"div",13),d.Oc(17,y,3,0,"div",13),d.bc(18,"div",14),d.bc(19,"button",15),d.jc("click",(function(){return e.search(!0)})),d.Qc(20,"Search"),d.ac(),d.ac(),d.bc(21,"div",16),d.Qc(22," Top UP A/c"),d.Wb(23,"br"),d.bc(24,"span",17),d.Qc(25,"Current Balance"),d.ac(),d.Wb(26,"br"),d.bc(27,"span",18),d.Qc(28),d.oc(29,"number"),d.ac(),d.ac(),d.ac(),d.ac(),d.ac(),d.bc(30,"div",1),d.bc(31,"div",19),d.Oc(32,F,7,9,"table",20),d.Oc(33,L,2,0,"ng-template",null,21,d.Pc),d.ac(),d.Oc(35,R,13,3,"div",22),d.ac(),d.ac()),2&t){var n=d.Fc(34);d.Ib(5),d.uc("formGroup",e.searchForm),d.Ib(6),d.uc("checked",e.defaultToday),d.Ib(5),d.uc("ngIf",!e.defaultToday),d.Ib(1),d.uc("ngIf",e.defaultToday),d.Ib(11),d.Rc(d.qc(29,8,e.currentBalance,"1.2-2")),d.Ib(4),d.uc("ngIf",(null==e.topUpList?null:e.topUpList.length)>0)("ngIfElse",n),d.Ib(3),d.uc("ngIf",(null==e.topUpList?null:e.topUpList.length)>0)}},directives:[l.A,l.o,l.h,a.n,i.a,l.b,l.n,l.e,a.m,a.p,a.r,m.c,a.l],pipes:[a.f,m.b,a.e],styles:[".bnt[_ngcontent-%COMP%]{font-size:14px}.box[_ngcontent-%COMP%]{background-color:#fff}.item-number[_ngcontent-%COMP%], .item-number-active[_ngcontent-%COMP%]{display:inline-block;border:1px solid hsla(0,0%,50.2%,.7);padding-left:9px;padding-right:9px;padding-top:2px;height:30px;cursor:pointer;margin:1px}.item-number-active[_ngcontent-%COMP%]{background-color:#2199e8;color:#fff}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{text-align:left}td[_ngcontent-%COMP%]{padding:5px}.dropdown-menu[_ngcontent-%COMP%]{min-width:0}.show-data[_ngcontent-%COMP%]{overflow-x:scroll}#icon[_ngcontent-%COMP%]{float:right;margin-top:-24px;font-size:17px;padding-right:8px}  .md-drppicker{width:600px!important}th[_ngcontent-%COMP%]{border-top:none;white-space:nowrap;padding:.4rem}.modal-body[_ngcontent-%COMP%]{overflow-x:scroll;padding:3px!important}.modal-header[_ngcontent-%COMP%]{background-color:#f2f2f2}.mDiv[_ngcontent-%COMP%]{margin-top:-20px}@media screen and (min-width:700px) and (max-width:1384px){.mDiv[_ngcontent-%COMP%]{margin-top:-40px;margin-left:300px}.myDiv1[_ngcontent-%COMP%]{float:right}}"]}),U)}],B=((V=function t(){_classCallCheck(this,t)}).\u0275mod=d.Tb({type:V}),V.\u0275inj=d.Sb({factory:function(t){return new(t||V)},imports:[[r.g.forChild(q)],r.g]}),V),W=(($=function t(){_classCallCheck(this,t)}).\u0275mod=d.Tb({type:$}),$.\u0275inj=d.Sb({factory:function(t){return new(t||$)},imports:[[a.c,B,l.i,l.v,m.a,i.b.forRoot()]]}),$)}}]);