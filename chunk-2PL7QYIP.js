import{a as me,b as le,d as de,e as fe,f as ue,g as ge,h as _e}from"./chunk-NDNIGYGJ.js";import{a as ce}from"./chunk-PPOL65I3.js";import{a as pe,b as se}from"./chunk-5VM6SOJS.js";import{a as te}from"./chunk-B457KP2L.js";import{b as ne}from"./chunk-INXLSVOS.js";import{d as R,q as P}from"./chunk-MMT7OEII.js";import{G as oe,H as re,I as ae,g as G}from"./chunk-XWKLGUZW.js";import{f as Q,g as X,h as Z,i as ee}from"./chunk-3TVNMY35.js";import{$ as L,Ab as K,Wb as ie,jb as B,kb as W,mb as q,nb as U,qb as $,tb as j,wb as A,xb as Y,yb as H,zb as J}from"./chunk-44KGUWRF.js";import{Ca as N,Cb as w,Da as E,Dc as V,Ec as O,Fc as T,Ib as f,Ka as F,Ob as m,Pc as v,a as z,ac as p,bc as l,cc as s,dc as b,ec as I,fe as _,gc as M,ie as y,jc as C,lc as c,od as D,qb as a,vb as d,wc as h,wd as k,xc as u,yc as g}from"./chunk-FGERMZU7.js";function Ce(o,n){if(o&1&&s(0,"app-logo",13),o&2){let e=c(3);m("src",e.iconUrl)("size",25)}}function he(o,n){if(o&1&&f(0,Ce,1,2,"app-logo",12),o&2){let e=c(2);m("ngIf",e.iconUrl)}}function ve(o,n){if(o&1){let e=M();p(0,"app-upload",14),C("onChange",function(t){N(e);let i=c(2);return E(i.onChangeFile(t))}),l()}}function ye(o,n){if(o&1&&(b(0),p(1,"form",4)(2,"nz-form-item")(3,"nz-form-label",5),u(4),l(),p(5,"nz-form-control",6),s(6,"input",7),l()(),p(7,"nz-form-item")(8,"nz-form-label",5),u(9),l(),p(10,"nz-form-control",8),s(11,"nz-switch",9),l()(),p(12,"nz-form-item")(13,"nz-form-label",8),u(14),l(),p(15,"nz-form-control",8)(16,"nz-input-group",10),s(17,"input",11),l(),f(18,he,1,1,"ng-template",null,0,v)(20,ve,1,0,"ng-template",null,1,v),l()()(),I()),o&2){let e=h(19),r=h(21),t=c();a(),m("formGroup",t.validateForm),a(2),m("nzSpan",6),a(),g(t.$t("_categoryName")),a(),m("nzSpan",18)("nzErrorTip",t.$t("_requiredName")),a(3),m("nzSpan",6),a(),g(t.$t("_onlyOwnVisible")),a(),m("nzSpan",18),a(3),m("nzSpan",6),a(),g(t.$t("_iconAddr")),a(),m("nzSpan",18),a(),m("nzPrefix",e)("nzSuffix",r)}}var ze=class o{constructor(n,e,r){this.fb=n;this.message=e;this.router=r;this.validateForm=this.fb.group({title:["",[W.required]],icon:[""],ownVisible:[!1]});let t=(i={})=>{this.isSystemPage()||(this.validateForm.get("title").setValue(i.title||""),this.validateForm.get("icon").setValue(i.icon||""),this.validateForm.get("ownVisible").setValue(!!i.ownVisible),this.index=i.index||0,this.showModal=!0)};L.on("EDIT_CATEGORY_OPEN",t)}onOk=new F;title=y("_edit");app=!1;$t=y;validateForm;showModal=!1;index=0;get iconUrl(){return this.validateForm.get("icon")?.value||""}onChangeFile(n){this.validateForm.get("icon").setValue(n.cdn)}isSystemPage(){return!!(this.app&&this.router.url.includes("system"))}onCancel(){this.validateForm.reset(),this.showModal=!1}handleOk(){let{title:n,icon:e,ownVisible:r}=this.validateForm.value;if(!n||!n.trim()){this.message.error("Cannot be empty");return}n=n.trim();let t={title:n,icon:e,ownVisible:r};this.onOk.emit(t),this.onCancel();try{if(this.app){let{id:i}=R(),{oneIndex:x,twoIndex:S}=P(i);_[x].nav[S].nav[this.index]=z(z({},_[x].nav[S].nav[this.index]),t),ne(_)}}catch(i){this.message.error(i.message)}}static \u0275fac=function(e){return new(e||o)(d(H),d(ie),d(G))};static \u0275cmp=w({type:o,selectors:[["edit-category"]],inputs:{title:"title",app:"app"},outputs:{onOk:"onOk"},decls:2,vars:2,consts:[["prefixIcon",""],["suffixIconSearch",""],[3,"nzVisibleChange","nzOnCancel","nzOnOk","nzVisible","nzTitle"],[4,"nzModalContent"],["nz-form","",3,"formGroup"],["nzRequired","",3,"nzSpan"],[3,"nzSpan","nzErrorTip"],["formControlName","title","nz-input","","maxlength","50"],[3,"nzSpan"],["formControlName","ownVisible"],[3,"nzPrefix","nzSuffix"],["formControlName","icon","nz-input",""],[3,"src","size",4,"ngIf"],[3,"src","size"],[3,"onChange"]],template:function(e,r){e&1&&(p(0,"nz-modal",2),T("nzVisibleChange",function(i){return O(r.showModal,i)||(r.showModal=i),i}),C("nzOnCancel",function(){return r.onCancel()})("nzOnOk",function(){return r.handleOk()}),f(1,ye,22,13,"ng-container",3),l()),e&2&&(V("nzVisible",r.showModal),m("nzTitle",r.title))},dependencies:[k,D,ae,re,oe,_e,le,me,fe,de,ge,ue,ee,Q,Z,X,se,pe,te,ce,J,$,B,q,U,Y,K,j,A],encapsulation:2})};export{ze as a};
