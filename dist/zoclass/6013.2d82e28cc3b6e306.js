"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[6013],{46013:(k,d,a)=>{a.r(d),a.d(d,{AdminSettingClsModule:()=>v});var r=a(36895),i=a(89299),n=a(94650),l=a(22759),g=a(62373),m=a(88153),s=a(51572),p=a(88789);function f(t,e){1&t&&(n.TgZ(0,"h3"),n._uU(1,"Settings > Fee Payment"),n.qZA())}function h(t,e){1&t&&(n.TgZ(0,"h3"),n._uU(1,"Settings > Admit Card"),n.qZA())}function u(t,e){1&t&&(n.TgZ(0,"h3"),n._uU(1,"Settings > Exam Result"),n.qZA())}function C(t,e){if(1&t&&(n.TgZ(0,"div",12)(1,"div",1)(2,"div",13)(3,"h3",14),n._uU(4),n.ALo(5,"classSuffix"),n.qZA()()()()),2&t){const o=e.$implicit,c=n.oxw();n.xp6(2),n.hYB("routerLink","/admin/setting/",c.id,"/class/structure/",o.class,""),n.xp6(2),n.Oqu(n.lcZ(5,3,o.class))}}function b(t,e){1&t&&n._UZ(0,"mat-progress-spinner",19)}function M(t,e){if(1&t&&(n.TgZ(0,"div",17),n.YNc(1,b,1,0,"mat-progress-spinner",18),n.qZA()),2&t){const o=n.oxw(2);n.xp6(1),n.Q6J("ngIf",o.loader)}}function O(t,e){if(1&t&&(n.TgZ(0,"div",15),n.YNc(1,M,2,1,"div",16),n.qZA()),2&t){const o=n.oxw();n.xp6(1),n.Q6J("ngIf",o.loader)}}const _=[{path:"",component:(()=>{class t{constructor(o,c){this.activatedRoute=o,this.classService=c,this.loader=!0}ngOnInit(){this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.getClass()}getClass(){this.classService.getClassList().subscribe(o=>{o&&(this.classInfo=o,setTimeout(()=>{this.loader=!1},1e3))})}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(i.gz),n.Y36(l.j))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-admin-setting-cls"]],decls:20,vars:5,consts:[[1,"container-fluid","dashboard-container"],[1,"row"],[1,"col-12","col-lg-2"],[1,"col-12","col-lg-10"],[1,"col-12","big-container"],[1,"col-lg-12"],[1,"main-card"],[1,"col-12","col-lg-4","pt-2","pb-2"],[1,"col-12"],[4,"ngIf"],["class","col-12 col-lg-4 pt-2 pb-4",4,"ngFor","ngForOf"],["class","spinner-container",4,"ngIf"],[1,"col-12","col-lg-4","pt-2","pb-4"],[1,"col-10","offset-1","category-card",3,"routerLink"],[1,"category-title"],[1,"spinner-container"],["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"],["diameter","65","mode","indeterminate","strokeWidth","3",4,"ngIf"],["diameter","65","mode","indeterminate","strokeWidth","3"]],template:function(o,c){1&o&&(n._UZ(0,"app-header-navbar"),n.TgZ(1,"div",0)(2,"div",1)(3,"div",2),n._UZ(4,"app-side-navbar"),n.qZA(),n.TgZ(5,"div",3)(6,"div",1)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",1)(11,"div",7)(12,"div",1)(13,"div",8),n.YNc(14,f,2,0,"h3",9),n.YNc(15,h,2,0,"h3",9),n.YNc(16,u,2,0,"h3",9),n.qZA()()()(),n.TgZ(17,"div",1),n.YNc(18,C,6,5,"div",10),n.qZA()()()()()()()(),n.YNc(19,O,2,1,"div",11)),2&o&&(n.xp6(14),n.Q6J("ngIf","fees"==c.id),n.xp6(1),n.Q6J("ngIf","admit-card"==c.id),n.xp6(1),n.Q6J("ngIf","result"==c.id),n.xp6(2),n.Q6J("ngForOf",c.classInfo),n.xp6(1),n.Q6J("ngIf",c.loader))},dependencies:[r.sg,r.O5,i.rH,g.R,m.A,s.Ou,p.N],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif;overflow-x:hidden}[_nghost-%COMP%]{--common-color: #fff;--header-height: 10vh}.header[_ngcontent-%COMP%]{background-color:var(--common-color);width:100%;min-height:var(--header-height);left:0;top:0;position:fixed;z-index:2;padding:0!important;display:flex;justify-content:space-around;box-shadow:0 0 1px -10px #64748d15,0 0 0 1px #4d5c7615,0 0 4px #64748d15}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;margin-left:0}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8d6dff;font:1em sans-serif;letter-spacing:.5px}.main-menu[_ngcontent-%COMP%]{display:none}.hamburger-icon[_ngcontent-%COMP%]{fill:#8d6dff;width:24px;height:24px}.hamburger-menu[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:100vh;height:200vh;position:absolute;left:0;z-index:1000;top:0;display:block}.hamburger-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:large;color:#525098eb!important}.hamburger-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;margin-top:5px;color:#525098eb!important}.hamburger-menu[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{color:#525098eb!important;font-size:28px;margin-top:3.5vh;margin-left:88%}.top-hamburger-menu[_ngcontent-%COMP%]{display:none}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#4e4caa24}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#4e4caa32}.side-navbar[_ngcontent-%COMP%]{display:none}.dashboard-container[_ngcontent-%COMP%]{background-color:transparent;min-height:90vh;width:100%}.big-container[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:70vh;margin-top:1vh}.main-card[_ngcontent-%COMP%]{min-height:70vh;width:100%;background-color:transparent}.main-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4e4caacd;letter-spacing:.6px;font-size:18px}.modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4e4caacd;letter-spacing:.5px;font-size:16px}h4[_ngcontent-%COMP%]{color:#4e4caacd}p[_ngcontent-%COMP%]{color:#4e4caacd;font-size:15px}.category-card[_ngcontent-%COMP%]{background:#ebebff;height:200px;border-radius:15px;cursor:pointer}.category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin-top:25%;letter-spacing:.6px;font-size:18px;color:#4e4caacd}.form-control[_ngcontent-%COMP%]{height:45px;color:#4e4caacd;border:2px solid #e1dfeed7}.form-control[_ngcontent-%COMP%]::placeholder{color:#4e4caa83;font-size:15px}.form-control[_ngcontent-%COMP%]:focus{border-color:#4e4caa46;box-shadow:0 0 0 1px #4e4caa1e}.text-danger[_ngcontent-%COMP%]{font-size:12px}.submit-button[_ngcontent-%COMP%]{height:42px;background:#8d6dff;color:#fff;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#ebebff;color:#4e4caacd;cursor:not-allowed}.status-active[_ngcontent-%COMP%]{color:#8d6dff;font-weight:500;cursor:pointer;text-decoration:none}.status-inactive[_ngcontent-%COMP%]{color:#4e4caacd;cursor:pointer;text-decoration:none}.table[_ngcontent-%COMP%]{height:auto;display:block;width:100%;overflow-y:auto;overflow-x:auto}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{white-space:nowrap;color:#4e4caacd}table[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#4e4caacd;cursor:pointer}.table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4e4caacd}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center}.modal.fade.show[_ngcontent-%COMP%]{display:block;z-index:10!important;background:rgba(0,0,0,.5)}.modal-header[_ngcontent-%COMP%]{background-color:#8d6dff;top:0;position:sticky;z-index:1}.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:#fff}.modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer;color:#fff}.modal-footer[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background-color:#fff}.modal-body[_ngcontent-%COMP%]{overflow-y:auto;max-height:calc(80vh - 2.3 * 3.5rem)}.modal-dialog[_ngcontent-%COMP%]{height:80vh}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:185%}.modal-title[_ngcontent-%COMP%]{color:#8d6dff;font-size:20px}.delete-button[_ngcontent-%COMP%]{background:#eeecf5;color:#4a4a71;box-shadow:none}.success-message[_ngcontent-%COMP%]{color:#16b978;font-size:20px}.error-message[_ngcontent-%COMP%]{color:#e4409a}  mat-form-field{width:100%!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#4e4caac1!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#4e4caac1!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#4e4caac1!important;opacity:.8!important}  .mat-input-element{caret-color:#4e4caac1!important}  .mat-form-field-invalid .mat-input-element, .mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#4e4caac1!important}  .mat-form-field-label{color:#4e4caac1!important}  .mat-form-field.mat-focused .mat-form-field-label{color:#4e4caac1!important}  .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#4e4caac1!important}  .mat-radio-button{color:#4e4caac1;margin-right:20px;margin-bottom:5px}  .mat-radio-outer-circle{border:1px solid #4e4caac1}  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#8d6dff}  .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#8d6dff}  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#0000001a!important}.mat-checkbox[_ngcontent-%COMP%]{color:#4e4caac1}  .mat-checkbox-frame{border-color:#4e4caac1!important}  .mat-checkbox-ripple .mat-ripple-element{background-color:#8d6dff!important}  .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#8d6dff!important}  .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#8d6dff!important}  .mat-slide-toggle-bar{height:27px!important;width:48px!important;border-radius:36px!important;background-color:#d3cde8}  .mat-slide-toggle-thumb{top:6px!important;right:-6px!important;position:relative!important;background-color:#fff!important}  .mat-slide-toggle.mat-checked .mat-ripple-element{background-color:transparent}  .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#8d6dff!important}  .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#fff!important}@media (min-width: 576px) and (max-width:991.98px){.header[_ngcontent-%COMP%], .side-navbar[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]{display:none}}@media (min-width: 992px){.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:55px;margin-left:50px}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1.1em sans-serif;letter-spacing:.5px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1em sans-serif;letter-spacing:.4px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]{display:inline-block}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#8d6dff;margin-left:20px;cursor:pointer}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{color:#8d6dff;font:1.2em sans-serif;letter-spacing:.85px}.desktop-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#525098eb}.desktop-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;margin-top:2px;color:#525098eb}.hamburger[_ngcontent-%COMP%], .hamburger-menu[_ngcontent-%COMP%], .hamburger-icon[_ngcontent-%COMP%]{display:none}.side-navbar[_ngcontent-%COMP%]{height:90vh;width:16.5%;position:fixed;left:0;padding-top:2vh;padding-bottom:10vh;display:block;justify-content:space-around;background-color:#fff;overflow-x:auto;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#8d6dff;width:100%;padding:5px;display:block;flex-direction:column}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;display:inline-block;margin-left:5px;margin-top:5px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:1.1em;font-weight:400;text-align:center;margin-left:15px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active-link[_ngcontent-%COMP%]{background:#8d6dff;color:#fff}.dashboard-container[_ngcontent-%COMP%]{width:auto;background-color:#64748d15;padding-bottom:1.5vh}.big-container[_ngcontent-%COMP%]{background-color:#fff;min-height:87vh;width:98.5%;margin-top:1.5vh;margin-left:.75%;border-radius:10px;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.main-card[_ngcontent-%COMP%]{min-height:70vh;padding-left:2px;padding-right:2px}.table[_ngcontent-%COMP%]{display:inline-table;width:100%}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:100%}}"]}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[i.Bz.forChild(_),i.Bz]}),t})();var x=a(1293);let v=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.ez,P,x.g]}),t})()}}]);