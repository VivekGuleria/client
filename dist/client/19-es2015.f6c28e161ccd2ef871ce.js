(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"f/ku":function(e,c,t){"use strict";t.r(c),t.d(c,"KeyManagementModule",(function(){return $}));var n=t("SVse"),a=t("iInd"),i=t("orU0"),o=t("8Y7J"),r=t("AytR"),s=t("IheW"),l=t("qfBg");let u=(()=>{class e{constructor(e,c){this.http=e,this.userService=c,this.baseUrl=r.a.url}getAllKey(e){return this.http.post(this.userService.urlValue.url+"/api/merchant/fetch-key",e)}generateKey(e){return this.http.post(this.userService.urlValue.url+"/api/merchant/generate-key",e)}downloadKey(e){return this.http.post(this.userService.urlValue.url+"/api/merchant/download-key",e)}}return e.\u0275fac=function(c){return new(c||e)(o.fc(s.b),o.fc(l.a))},e.\u0275prov=o.Rb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=t("OC8m"),f=t("q17e");function y(e,c){if(1&e&&(o.bc(0,"span"),o.Qc(1),o.ac()),2&e){const e=o.nc().$implicit;o.Ib(1),o.Sc(" ",e.label," \xa0 ")}}function d(e,c){if(1&e&&(o.bc(0,"th"),o.Zb(1,9),o.Oc(2,y,2,1,"span",10),o.Yb(),o.ac()),2&e){const e=c.$implicit;o.Ib(1),o.uc("ngSwitch",e.field)}}function p(e,c){if(1&e){const e=o.cc();o.bc(0,"button",12),o.jc("click",(function(){return o.Ic(e),o.nc(2).generateKey()})),o.Qc(1,"Generate Key"),o.ac()}}const g=function(e){return[e]};function m(e,c){if(1&e&&(o.bc(0,"tr"),o.bc(1,"td"),o.Qc(2,"No Data"),o.ac(),o.bc(3,"td"),o.Qc(4,"No Data"),o.ac(),o.bc(5,"td"),o.Qc(6,"No Data"),o.ac(),o.bc(7,"td"),o.Qc(8,"No Data"),o.ac(),o.bc(9,"td"),o.Oc(10,p,2,0,"button",11),o.ac(),o.ac()),2&e){const e=o.nc();o.Ib(10),o.uc("appUserAccess",o.yc(1,g,e.roleAccess.viewKeyManagementGenerateKey))}}function h(e,c){if(1&e&&(o.bc(0,"div"),o.Qc(1),o.ac()),2&e){const e=o.nc().$implicit,c=o.nc().$implicit;o.Ib(1),o.Rc(c[e.field])}}function w(e,c){if(1&e&&(o.bc(0,"span"),o.Qc(1),o.oc(2,"date"),o.ac()),2&e){const e=o.nc(2).$implicit;o.Ib(1),o.Rc(o.qc(2,1,e.expiryDate,"dd/MM/yyyy"))}}function v(e,c){if(1&e&&(o.bc(0,"span"),o.Qc(1),o.oc(2,"date"),o.ac()),2&e){const e=o.nc(2).$implicit;o.Ib(1),o.Rc(o.qc(2,1,e.newKeyEffectiveDate,"dd/MM/yyyy"))}}function K(e,c){1&e&&(o.bc(0,"span"),o.Qc(1,"---"),o.ac())}function I(e,c){1&e&&(o.bc(0,"span"),o.Qc(1,"---"),o.ac())}function O(e,c){if(1&e&&(o.bc(0,"td"),o.Oc(1,h,2,1,"div",8),o.Oc(2,w,3,4,"span",8),o.Oc(3,v,3,4,"span",8),o.Oc(4,K,2,0,"span",8),o.Oc(5,I,2,0,"span",8),o.ac()),2&e){const e=c.$implicit,t=o.nc().$implicit;o.Ib(1),o.uc("ngIf","expiryDate"!=e.field&&"newKeyEffectiveDate"!==e.field),o.Ib(1),o.uc("ngIf","expiryDate"===e.field),o.Ib(1),o.uc("ngIf","newKeyEffectiveDate"===e.field),o.Ib(1),o.uc("ngIf","newKeyEffectiveDate"===e.field&&null==t[e.field]),o.Ib(1),o.uc("ngIf","expiryDate"===e.field&&null==t[e.field])}}function k(e,c){if(1&e){const e=o.cc();o.bc(0,"button",18),o.jc("click",(function(){return o.Ic(e),o.nc(3).generateKey()})),o.Qc(1,"Re-Generate Key"),o.ac()}}function D(e,c){if(1&e){const e=o.cc();o.bc(0,"button",19),o.jc("click",(function(){return o.Ic(e),o.nc(3).downloadKey()})),o.Qc(1,"Download Key"),o.ac()}}function S(e,c){if(1&e&&(o.bc(0,"div",15),o.Oc(1,k,2,0,"button",16),o.Oc(2,D,2,0,"button",17),o.ac()),2&e){const e=o.nc(2);o.Ib(1),o.uc("appUserAccess",o.yc(2,g,e.roleAccess.viewKeyManagementReGenerateKey)),o.Ib(1),o.uc("appUserAccess",o.yc(4,g,e.roleAccess.viewKeyManagementDownloadKey))}}function M(e,c){if(1&e){const e=o.cc();o.bc(0,"button",24),o.jc("click",(function(){return o.Ic(e),o.nc(4).generateKey()})),o.Qc(1,"Re-Generate Key"),o.ac()}}function x(e,c){if(1&e){const e=o.cc();o.bc(0,"button",12),o.jc("click",(function(){return o.Ic(e),o.nc(4).downloadKey()})),o.Qc(1,"Download Key"),o.ac()}}function A(e,c){if(1&e&&(o.bc(0,"div",22),o.Oc(1,M,2,0,"button",23),o.Oc(2,x,2,0,"button",11),o.ac()),2&e){const e=o.nc(3);o.Ib(1),o.uc("appUserAccess",o.yc(2,g,e.roleAccess.viewKeyManagementReGenerateKey)),o.Ib(1),o.uc("appUserAccess",o.yc(4,g,e.roleAccess.viewKeyManagementDownloadKey))}}function Q(e,c){if(1&e&&(o.bc(0,"td",20),o.Oc(1,A,3,6,"div",21),o.ac()),2&e){const e=o.nc().$implicit,c=o.nc();o.Ib(1),o.uc("ngIf",1==(null==c.allKeyData?null:c.allKeyData.length)&&0==e.keyIndex)}}function U(e,c){if(1&e&&(o.bc(0,"tr"),o.Oc(1,O,6,5,"td",7),o.bc(2,"td"),o.Oc(3,S,3,6,"div",13),o.ac(),o.Oc(4,Q,2,1,"ng-template",null,14,o.Pc),o.ac()),2&e){const e=c.$implicit,t=o.Fc(5),n=o.nc();o.Ib(1),o.uc("ngForOf",n.cols),o.Ib(2),o.uc("ngIf",2==(null==n.allKeyData?null:n.allKeyData.length)&&1==e.keyIndex)("ngIfElse",t)}}const R=[{path:"",component:(()=>{class e{constructor(e,c,t){this.keyManagementService=e,this.userService=c,this.notifyService=t,this.roleAccess=i.a,this.cols=[{label:"Key ID",field:"secretKey",sortOptions:"",sort:"text"},{label:"Key Index",field:"keyIndex",sortOptions:"",sort:"number"},{label:"Expiry Date",field:"expiryDate",sortOptions:"",sort:"text"},{label:"Key Effective Date",field:"newKeyEffectiveDate",sortOptions:"",sort:"number"}]}ngOnInit(){this.getAllKey()}getAllKey(){this.keyManagementService.getAllKey({merchantid:this.userService.userValue.merchantId}).subscribe(e=>{this.allKeyData=e})}generateKey(){this.keyManagementService.generateKey({merchantid:this.userService.userValue.merchantId}).subscribe(e=>{console.log(e),this.notifyService.showSuccess("Key Generated Successfully",""),setTimeout(()=>{this.downloadKey()},2e3),setTimeout(()=>{location.reload()},4e3)})}downloadKey(){this.keyManagementService.downloadKey({merchantid:this.userService.userValue.merchantId}).subscribe(e=>{console.log(e.secretKey);const c=new window.Blob([e.secretKey],{type:"text"}),t=document.createElement("a");t.style.display="none";const n=URL.createObjectURL(c);t.href=n,t.download="secretKey",t.click(),this.notifyService.showSuccess("Secret Key Downloaded Successfully","")})}}return e.\u0275fac=function(c){return new(c||e)(o.Vb(u),o.Vb(l.a),o.Vb(b.a))},e.\u0275cmp=o.Pb({type:e,selectors:[["app-key-management"]],decls:16,vars:3,consts:[[1,"container-fluid",2,"height","100vh"],[1,"row","box","mt-3"],[1,"col-md-12","card-header",2,"font-weight","700","font-size","16px"],[1,"fa","fa-key","ml-2",2,"font-weight","700"],[1,"row","box","mt-2"],[1,"col-md-12",2,"overflow-x","scroll"],[1,"table","table-striped","table-hover","table-responsive-lg"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchDefault"],["type","button","class","btn btn-primary btn-sm","style","font-size: 0.7vw;",3,"click",4,"appUserAccess"],["type","button",1,"btn","btn-primary","btn-sm",2,"font-size","0.7vw",3,"click"],["class","btn-group mt-2","role","group",4,"ngIf","ngIfElse"],["change",""],["role","group",1,"btn-group","mt-2"],["class","btn btn-danger btn-sm mr-1","style","font-size: 0.7vw;",3,"click",4,"appUserAccess"],["class","btn btn-primary btn-sm","style","font-size: 0.7vw;",3,"click",4,"appUserAccess"],[1,"btn","btn-danger","btn-sm","mr-1",2,"font-size","0.7vw",3,"click"],[1,"btn","btn-primary","btn-sm",2,"font-size","0.7vw",3,"click"],[2,"display","inline"],["class","btn-group","role","group",4,"ngIf"],["role","group",1,"btn-group"],["type","button","class","btn btn-danger btn-sm mr-1","style","font-size: 0.7vw;",3,"click",4,"appUserAccess"],["type","button",1,"btn","btn-danger","btn-sm","mr-1",2,"font-size","0.7vw",3,"click"]],template:function(e,c){1&e&&(o.bc(0,"div",0),o.bc(1,"div",1),o.bc(2,"div",2),o.Wb(3,"i",3),o.Qc(4,"Key Management "),o.ac(),o.ac(),o.bc(5,"div",4),o.bc(6,"div",5),o.bc(7,"table",6),o.bc(8,"thead"),o.bc(9,"tr"),o.Oc(10,d,3,1,"th",7),o.bc(11,"th"),o.Qc(12,"Action"),o.ac(),o.ac(),o.ac(),o.bc(13,"tbody"),o.Oc(14,m,11,3,"tr",8),o.Oc(15,U,6,3,"tr",7),o.ac(),o.ac(),o.ac(),o.ac(),o.ac()),2&e&&(o.Ib(10),o.uc("ngForOf",c.cols),o.Ib(4),o.uc("ngIf",0==(null==c.allKeyData?null:c.allKeyData.length)),o.Ib(1),o.uc("ngForOf",c.allKeyData))},directives:[n.m,n.n,n.p,n.r,f.a],pipes:[n.e],styles:["th[_ngcontent-%COMP%]{white-space:normal;word-wrap:break-word}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border-top:none;text-align:center}td[_ngcontent-%COMP%]{padding:5px;vertical-align:middle}.box[_ngcontent-%COMP%]{background-color:#fff}.btn-group[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{border-radius:3px}"]}),e})()}];let E=(()=>{class e{}return e.\u0275mod=o.Tb({type:e}),e.\u0275inj=o.Sb({factory:function(c){return new(c||e)},imports:[[a.g.forChild(R)],a.g]}),e})();var V=t("d2mR");let $=(()=>{class e{}return e.\u0275mod=o.Tb({type:e}),e.\u0275inj=o.Sb({factory:function(c){return new(c||e)},imports:[[n.c,E,V.a]]}),e})()}}]);