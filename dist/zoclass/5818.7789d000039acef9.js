"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[5818],{25818:(T,b,r)=>{r.r(b),r.d(b,{TopperModule:()=>G});var o=r(36895),h=r(89299),m=r(24006),C=r(77579),x=r(92340),t=r(94650),M=r(47674),v=r(22759),d=r(62373),f=r(88153),i=r(3238),p=r(4859),g=r(97392),_=r(59549),O=r(44144),Z=r(51572),k=r(84385),y=r(80980),P=r(4455),w=r(88789);function A(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"p",25),t._uU(3),t.qZA()(),t.TgZ(4,"td")(5,"p",25),t._uU(6),t.qZA()(),t.TgZ(7,"td"),t._UZ(8,"img",26),t.qZA(),t.TgZ(9,"td")(10,"p",25),t._uU(11),t.ALo(12,"classSuffix"),t.qZA()(),t.TgZ(13,"td")(14,"p",25),t._uU(15),t.qZA()(),t.TgZ(16,"td")(17,"p",25),t._uU(18),t.qZA()(),t.TgZ(19,"td",25)(20,"mat-icon",27),t.NdJ("click",function(){const s=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.updateTopperModel(s))}),t._uU(21,"edit"),t.qZA()(),t.TgZ(22,"td",25)(23,"mat-icon",27),t.NdJ("click",function(){const s=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.deleteTopperModel(s._id))}),t._uU(24,"delete"),t.qZA()()()}if(2&n){const e=c.$implicit,a=c.index,l=t.oxw(2);t.xp6(3),t.Oqu(10*l.number+a+1-10),t.xp6(3),t.Oqu(e.name),t.xp6(2),t.hYB("src","",l.baseUrl,"/public/topper-image/",e.image,"",t.LSH),t.xp6(3),t.Oqu(t.lcZ(12,7,e.class)),t.xp6(4),t.hij("",e.percentile,"%"),t.xp6(3),t.Oqu(e.year)}}function N(n,c){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,A,25,9,"tr",24),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.topperInfo)}}function U(n,c){if(1&n&&(t.TgZ(0,"div",28)(1,"div",29)(2,"h5",30),t._uU(3,"Class"),t.qZA()(),t.TgZ(4,"div",31)(5,"p",32),t._uU(6),t.qZA()(),t.TgZ(7,"div",33),t._UZ(8,"mat-icon"),t.qZA()()),2&n){const e=t.oxw();t.xp6(6),t.Oqu(e.successMsg)}}function I(n,c){if(1&n&&(t.TgZ(0,"div")(1,"p",47),t._uU(2),t.qZA()()),2&n){const e=t.oxw(3);t.xp6(2),t.Oqu(e.errorMsg)}}function q(n,c){1&n&&(t.TgZ(0,"mat-hint",48),t._uU(1,"Name is required"),t.qZA())}function F(n,c){if(1&n&&(t.TgZ(0,"div")(1,"mat-option",49),t._uU(2),t.ALo(3,"classSuffix"),t.qZA()()),2&n){const e=c.$implicit;t.xp6(1),t.s9C("value",e.class),t.xp6(1),t.Oqu(t.lcZ(3,2,e.class))}}function J(n,c){1&n&&(t.TgZ(0,"mat-hint",48),t._uU(1,"Class is required"),t.qZA())}function z(n,c){1&n&&(t.TgZ(0,"mat-hint",48),t._uU(1,"Percentile is required"),t.qZA())}function L(n,c){1&n&&(t.TgZ(0,"mat-hint",48),t._uU(1,"Passing year is required"),t.qZA())}function Q(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"form",37),t.NdJ("ngSubmit",function(){t.CHM(e);const l=t.oxw(2);return t.KtG(l.topperAddUpdate())}),t.TgZ(1,"div",31),t.YNc(2,I,3,1,"div",17),t.TgZ(3,"mat-form-field",38)(4,"mat-label"),t._uU(5,"Name"),t.qZA(),t._UZ(6,"input",39),t.YNc(7,q,2,0,"mat-hint",40),t.qZA(),t.TgZ(8,"mat-form-field",38)(9,"mat-label"),t._uU(10,"Select Class"),t.qZA(),t.TgZ(11,"mat-select",41),t.YNc(12,F,4,4,"div",24),t.qZA(),t.YNc(13,J,2,0,"mat-hint",40),t.qZA(),t.TgZ(14,"mat-form-field",38)(15,"mat-label"),t._uU(16,"Percentile"),t.qZA(),t._UZ(17,"input",42),t.YNc(18,z,2,0,"mat-hint",40),t.qZA(),t.TgZ(19,"mat-form-field",38)(20,"mat-label"),t._uU(21,"Passing Year"),t.qZA(),t._UZ(22,"input",43),t.YNc(23,L,2,0,"mat-hint",40),t.qZA(),t.TgZ(24,"mat-form-field",38)(25,"mat-label"),t._uU(26,"Choose Image"),t.qZA(),t.TgZ(27,"ngx-mat-file-input",44)(28,"mat-icon",45),t._uU(29,"cloud_upload"),t.qZA()()()(),t.TgZ(30,"div",33)(31,"button",46),t._uU(32,"Submit"),t.qZA()()()}if(2&n){const e=t.oxw(2);let a,l,s,u;t.Q6J("formGroup",e.topperForm),t.xp6(2),t.Q6J("ngIf",e.errorCheck),t.xp6(5),t.Q6J("ngIf",!(null!=(a=e.topperForm.get("name"))&&a.valid)&&(null==(a=e.topperForm.get("name"))?null:a.touched)),t.xp6(5),t.Q6J("ngForOf",e.classInfo),t.xp6(1),t.Q6J("ngIf",!(null!=(l=e.topperForm.get("class"))&&l.valid)&&(null==(l=e.topperForm.get("class"))?null:l.touched)),t.xp6(5),t.Q6J("ngIf",!(null!=(s=e.topperForm.get("percentile"))&&s.valid)&&(null==(s=e.topperForm.get("percentile"))?null:s.touched)),t.xp6(5),t.Q6J("ngIf",!(null!=(u=e.topperForm.get("year"))&&u.valid)&&(null==(u=e.topperForm.get("year"))?null:u.touched)),t.xp6(8),t.Q6J("disabled",!e.topperForm.valid)}}function Y(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"h4"),t._uU(2,"To delete topper detail, click ok to confirm."),t.qZA(),t.TgZ(3,"div",33)(4,"button",50),t.NdJ("click",function(){t.CHM(e);const l=t.oxw(2);return t.KtG(l.topperDelete(l.deleteById))}),t._uU(5,"Ok"),t.qZA()()()}}function R(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",28)(1,"div",29)(2,"h5",34),t._uU(3),t.qZA(),t.TgZ(4,"mat-icon",35),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.closeModal())}),t._uU(5,"close"),t.qZA()(),t.YNc(6,Q,33,8,"form",36),t.YNc(7,Y,6,0,"div",17),t.qZA()}if(2&n){const e=t.oxw();t.xp6(3),t.hij("",e.updateMode?"Update":e.deleteMode?"Delete":"Create New"," Topper"),t.xp6(3),t.Q6J("ngIf",!e.deleteMode),t.xp6(1),t.Q6J("ngIf",e.deleteMode)}}function E(n,c){1&n&&t._UZ(0,"mat-progress-spinner",55)}function S(n,c){if(1&n&&(t.TgZ(0,"div",53),t.YNc(1,E,1,0,"mat-progress-spinner",54),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.loader)}}function D(n,c){if(1&n&&(t.TgZ(0,"div",51),t.YNc(1,S,2,1,"div",52),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.loader)}}const j=[{path:"",component:(()=>{class n{constructor(e,a,l){this.fb=e,this.topperService=a,this.classService=l,this.baseUrl=x.N.API_URL,this.showModal=!1,this.updateMode=!1,this.deleteMode=!1,this.deleteById="",this.successMsg="",this.errorMsg="",this.errorCheck=!1,this.topperInfo=[],this.classInfo=[],this.recordLimit=5,this.filters={},this.number=0,this.paginationValues=new C.x,this.loader=!0,this.topperForm=this.fb.group({_id:[""],name:["",m.kI.required],class:["",m.kI.required],percentile:["",m.kI.required],year:["",m.kI.required],image:[""]})}ngOnInit(){let e=this.getTopper({page:1});this.getClass(),e&&setTimeout(()=>{this.loader=!1},1e3)}getClass(){this.classService.getClassList().subscribe(e=>{e&&(this.classInfo=e)})}getTopper(e){return new Promise((a,l)=>{let s={filters:{},page:e.page,limit:e.limit?e.limit:this.recordLimit};this.recordLimit=s.limit,this.filters.searchText&&(s.filters.searchText=this.filters.searchText.trim()),this.topperService.topperPaginationList(s).subscribe(u=>{if(u)return this.topperInfo=u.topperList,this.number=s.page,this.paginationValues.next({type:"page-init",page:s.page,totalTableRecords:u.countTopper}),a(!0)})})}closeModal(){this.showModal=!1,this.updateMode=!1,this.deleteMode=!1,this.errorMsg=""}addTopperModel(){this.showModal=!0,this.deleteMode=!1,this.topperForm.reset()}updateTopperModel(e){this.showModal=!0,this.deleteMode=!1,this.updateMode=!0,this.topperForm.patchValue(e)}deleteTopperModel(e){this.showModal=!0,this.updateMode=!1,this.deleteMode=!0,this.deleteById=e}successDone(){setTimeout(()=>{this.closeModal(),this.successMsg="",this.getTopper({page:1})},1e3)}topperAddUpdate(){this.topperForm.valid&&(this.updateMode?this.topperService.updateTopper(this.topperForm.value).subscribe(e=>{e&&(this.successDone(),this.successMsg=e)},e=>{this.errorCheck=!0,this.errorMsg=e.error}):this.topperService.addTopper(this.topperForm.value).subscribe(e=>{e&&(this.successDone(),this.successMsg=e)},e=>{this.errorCheck=!0,this.errorMsg=e.error}))}topperDelete(e){this.topperService.deleteTopper(e).subscribe(a=>{a&&(this.successDone(),this.successMsg=a,this.deleteById="")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.qu),t.Y36(M.Q),t.Y36(v.j))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-topper"]],decls:47,vars:8,consts:[[1,"container-fluid","dashboard-container"],[1,"row"],[1,"col-12","col-lg-2"],[1,"col-12","col-lg-10"],[1,"col-12","big-container"],[1,"col-lg-12","offset-lg-0"],[1,"main-card"],[1,"row","mt-4","mb-2"],[1,"col-8","col-lg-5"],["type","text","placeholder","Topper Search...","id","searchText","name","searchText",1,"form-control",3,"ngModel","ngModelChange","keyup"],["searchText","ngModel"],[1,"col-4","col-lg-2","offset-lg-5"],["mat-raised-button","",1,"submit-button",3,"click"],[2,"font-size","20px"],[1,"table","table-hover","align-middle","mt-2","mb-1","bg-white"],[1,"bg-light"],[1,"text-muted"],[4,"ngIf"],[1,"pagination"],[3,"paginationValues","onChange"],[1,"modal","fade","show"],["role","document",1,"modal-dialog","modal-dialog-top"],["class","modal-content",4,"ngIf"],["class","spinner-container",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"mb-0"],["alt","",2,"height","28px",3,"src"],[3,"click"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title",2,"color","transparent"],[1,"modal-body"],[1,"success-message"],[1,"modal-footer"],[1,"modal-title"],["matRipple","",3,"click"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","text","formControlName","name"],["class","form-text text-danger",4,"ngIf"],["type","number","matInput","","formControlName","class"],["matInput","","type","number","formControlName","percentile"],["matInput","","type","number","formControlName","year"],["formControlName","image"],["ngxMatFileInputIcon","",2,"color","#8d6dff"],["type","submit","mat-raised-button","",1,"submit-button",3,"disabled"],[1,"error-message"],[1,"form-text","text-danger"],[3,"value"],["mat-raised-button","","type","button",1,"delete-button",3,"click"],[1,"spinner-container"],["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"],["diameter","65","mode","indeterminate","strokeWidth","3",4,"ngIf"],["diameter","65","mode","indeterminate","strokeWidth","3"]],template:function(e,a){1&e&&(t._UZ(0,"app-header-navbar"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2),t._UZ(4,"app-side-navbar"),t.qZA(),t.TgZ(5,"div",3)(6,"div",1)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"input",9,10),t.NdJ("ngModelChange",function(s){return a.filters.searchText=s})("keyup",function(){return a.getTopper({page:1,limit:0})}),t.qZA()(),t.TgZ(14,"div",11)(15,"button",12),t.NdJ("click",function(){return a.addTopperModel()}),t.TgZ(16,"mat-icon",13),t._uU(17,"add"),t.qZA(),t._uU(18,"Create"),t.qZA()()(),t.TgZ(19,"table",14)(20,"thead",15)(21,"tr",16)(22,"th"),t._uU(23,"No."),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Name"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Image"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Class"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"Percentile"),t.qZA(),t.TgZ(32,"th"),t._uU(33,"Year"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"Edit"),t.qZA(),t.TgZ(36,"th"),t._uU(37,"Remove"),t.qZA()()(),t._UZ(38,"tbody"),t.YNc(39,N,2,1,"tbody",17),t.qZA(),t.TgZ(40,"div",18)(41,"app-pagination",19),t.NdJ("onChange",function(s){return a.getTopper(s)}),t.qZA()(),t.TgZ(42,"div",20)(43,"div",21),t.YNc(44,U,9,1,"div",22),t.YNc(45,R,8,3,"div",22),t.qZA()()()()()()()(),t.YNc(46,D,2,1,"div",23),t.qZA()),2&e&&(t.xp6(12),t.Q6J("ngModel",a.filters.searchText),t.xp6(27),t.Q6J("ngIf",a.topperInfo&&a.topperInfo.length>0),t.xp6(2),t.Q6J("paginationValues",a.paginationValues),t.xp6(1),t.ekj("show",a.showModal),t.xp6(2),t.Q6J("ngIf",a.successMsg),t.xp6(1),t.Q6J("ngIf",!a.successMsg),t.xp6(1),t.Q6J("ngIf",a.loader))},dependencies:[o.sg,o.O5,d.R,f.A,i.ey,p.lW,g.Hw,_.KE,_.bx,_.hX,O.Nt,Z.Ou,i.wG,k.gD,m._Y,m.Fj,m.wV,m.JJ,m.JL,m.sg,m.u,m.On,y.Q,P.v6,P.qb,w.N],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif;overflow-x:hidden}[_nghost-%COMP%]{--common-color: #fff;--header-height: 10vh}.header[_ngcontent-%COMP%]{background-color:var(--common-color);width:100%;min-height:var(--header-height);left:0;top:0;position:fixed;z-index:2;padding:0!important;display:flex;justify-content:space-around;box-shadow:0 0 1px -10px #64748d15,0 0 0 1px #4d5c7615,0 0 4px #64748d15}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;margin-left:0}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8d6dff;font:1em sans-serif;letter-spacing:.5px}.main-menu[_ngcontent-%COMP%]{display:none}.hamburger-icon[_ngcontent-%COMP%]{fill:#8d6dff;width:24px;height:24px}.hamburger-menu[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:100vh;height:200vh;position:absolute;left:0;z-index:1000;top:0;display:block}.hamburger-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:large;color:#525098eb!important}.hamburger-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;margin-top:5px;color:#525098eb!important}.hamburger-menu[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{color:#525098eb!important;font-size:28px;margin-top:3.5vh;margin-left:88%}.top-hamburger-menu[_ngcontent-%COMP%]{display:none}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#4e4caa24}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#4e4caa32}.side-navbar[_ngcontent-%COMP%]{display:none}.dashboard-container[_ngcontent-%COMP%]{background-color:transparent;min-height:90vh;width:100%}.big-container[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:70vh;margin-top:1vh}.main-card[_ngcontent-%COMP%]{min-height:70vh;width:100%;background-color:transparent}.main-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4e4caacd;letter-spacing:.6px;font-size:18px}.modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4e4caacd;letter-spacing:.5px;font-size:16px}h4[_ngcontent-%COMP%]{color:#4e4caacd}p[_ngcontent-%COMP%]{color:#4e4caacd;font-size:15px}.category-card[_ngcontent-%COMP%]{background:#ebebff;height:200px;border-radius:15px;cursor:pointer}.category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin-top:25%;letter-spacing:.6px;font-size:18px;color:#4e4caacd}.form-control[_ngcontent-%COMP%]{height:45px;color:#4e4caacd;border:2px solid #e1dfeed7}.form-control[_ngcontent-%COMP%]::placeholder{color:#4e4caa83;font-size:15px}.form-control[_ngcontent-%COMP%]:focus{border-color:#4e4caa46;box-shadow:0 0 0 1px #4e4caa1e}.text-danger[_ngcontent-%COMP%]{font-size:12px}.submit-button[_ngcontent-%COMP%]{height:42px;background:#8d6dff;color:#fff;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#ebebff;color:#4e4caacd;cursor:not-allowed}.status-active[_ngcontent-%COMP%]{color:#8d6dff;font-weight:500;cursor:pointer;text-decoration:none}.status-inactive[_ngcontent-%COMP%]{color:#4e4caacd;cursor:pointer;text-decoration:none}.table[_ngcontent-%COMP%]{height:auto;display:block;width:100%;overflow-y:auto;overflow-x:auto}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{white-space:nowrap;color:#4e4caacd}table[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#4e4caacd;cursor:pointer}.table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4e4caacd}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center}.modal.fade.show[_ngcontent-%COMP%]{display:block;z-index:10!important;background:rgba(0,0,0,.5)}.modal-header[_ngcontent-%COMP%]{background-color:#8d6dff;top:0;position:sticky;z-index:1}.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:#fff}.modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer;color:#fff}.modal-footer[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background-color:#fff}.modal-body[_ngcontent-%COMP%]{overflow-y:auto;max-height:calc(80vh - 2.3 * 3.5rem)}.modal-dialog[_ngcontent-%COMP%]{height:80vh}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:185%}.modal-title[_ngcontent-%COMP%]{color:#8d6dff;font-size:20px}.delete-button[_ngcontent-%COMP%]{background:#eeecf5;color:#4a4a71;box-shadow:none}.success-message[_ngcontent-%COMP%]{color:#16b978;font-size:20px}.error-message[_ngcontent-%COMP%]{color:#e4409a}  mat-form-field{width:100%!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#4e4caac1!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#4e4caac1!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#4e4caac1!important;opacity:.8!important}  .mat-input-element{caret-color:#4e4caac1!important}  .mat-form-field-invalid .mat-input-element, .mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#4e4caac1!important}  .mat-form-field-label{color:#4e4caac1!important}  .mat-form-field.mat-focused .mat-form-field-label{color:#4e4caac1!important}  .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#4e4caac1!important}  .mat-radio-button{color:#4e4caac1;margin-right:20px;margin-bottom:5px}  .mat-radio-outer-circle{border:1px solid #4e4caac1}  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#8d6dff}  .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#8d6dff}  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#0000001a!important}.mat-checkbox[_ngcontent-%COMP%]{color:#4e4caac1}  .mat-checkbox-frame{border-color:#4e4caac1!important}  .mat-checkbox-ripple .mat-ripple-element{background-color:#8d6dff!important}  .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#8d6dff!important}  .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#8d6dff!important}  .mat-slide-toggle-bar{height:27px!important;width:48px!important;border-radius:36px!important;background-color:#d3cde8}  .mat-slide-toggle-thumb{top:6px!important;right:-6px!important;position:relative!important;background-color:#fff!important}  .mat-slide-toggle.mat-checked .mat-ripple-element{background-color:transparent}  .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#8d6dff!important}  .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#fff!important}@media (min-width: 576px) and (max-width:991.98px){.header[_ngcontent-%COMP%], .side-navbar[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]{display:none}}@media (min-width: 992px){.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:55px;margin-left:50px}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1.1em sans-serif;letter-spacing:.5px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1em sans-serif;letter-spacing:.4px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]{display:inline-block}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#8d6dff;margin-left:20px;cursor:pointer}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{color:#8d6dff;font:1.2em sans-serif;letter-spacing:.85px}.desktop-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#525098eb}.desktop-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;margin-top:2px;color:#525098eb}.hamburger[_ngcontent-%COMP%], .hamburger-menu[_ngcontent-%COMP%], .hamburger-icon[_ngcontent-%COMP%]{display:none}.side-navbar[_ngcontent-%COMP%]{height:90vh;width:16.5%;position:fixed;left:0;padding-top:2vh;padding-bottom:10vh;display:block;justify-content:space-around;background-color:#fff;overflow-x:auto;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#8d6dff;width:100%;padding:5px;display:block;flex-direction:column}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;display:inline-block;margin-left:5px;margin-top:5px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:1.1em;font-weight:400;text-align:center;margin-left:15px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active-link[_ngcontent-%COMP%]{background:#8d6dff;color:#fff}.dashboard-container[_ngcontent-%COMP%]{width:auto;background-color:#64748d15;padding-bottom:1.5vh}.big-container[_ngcontent-%COMP%]{background-color:#fff;min-height:87vh;width:98.5%;margin-top:1.5vh;margin-left:.75%;border-radius:10px;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.main-card[_ngcontent-%COMP%]{min-height:70vh;padding-left:2px;padding-right:2px}.table[_ngcontent-%COMP%]{display:inline-table;width:100%}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:100%}}"]}),n})()}];let B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.Bz.forChild(j),h.Bz]}),n})();var K=r(1293);let G=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[o.ez,B,K.g]}),n})()},80980:(T,b,r)=>{r.d(b,{Q:()=>v});var o=r(94650),h=r(36895),m=r(4859),C=r(97392);function x(d,f){if(1&d){const i=o.EpF();o.TgZ(0,"button",6),o.NdJ("click",function(){o.CHM(i);const g=o.oxw().$implicit,_=o.oxw(2);return o.KtG(_.onChangePage(g,0))}),o._uU(1),o.qZA()}if(2&d){const i=o.oxw().$implicit,p=o.oxw(2);o.ekj("pagination_active",p.activePageNumber==i),o.xp6(1),o.Oqu(i)}}function t(d,f){if(1&d&&o.YNc(0,x,2,3,"button",5),2&d){const i=f.$implicit,p=o.oxw(2);o.Q6J("ngIf",p.showPages(i))}}function M(d,f){if(1&d){const i=o.EpF();o.TgZ(0,"div",1)(1,"ul",2)(2,"button",3),o.NdJ("click",function(){o.CHM(i);const g=o.oxw();return o.KtG(g.changePage(-1))}),o.TgZ(3,"mat-icon"),o._uU(4,"chevron_left"),o.qZA()(),o.YNc(5,t,1,1,"ng-template",4),o.TgZ(6,"button",3),o.NdJ("click",function(){o.CHM(i);const g=o.oxw();return o.KtG(g.changePage(1))}),o.TgZ(7,"mat-icon"),o._uU(8,"chevron_right"),o.qZA()()()()}if(2&d){const i=o.oxw();o.xp6(5),o.Q6J("ngForOf",i.pages)}}let v=(()=>{class d{constructor(){this.totalTableRecords=0,this.onChange=new o.vpe,this.recordLimit=10,this.pages=[],this.activePageNumber=0,this.iteration=0,this.filters={},this.selectedLimit=10}ngOnInit(){this.paginationValues?.subscribe(i=>{i&&"page-init"==i.type&&(this.totalTableRecords=i.totalTableRecords,this.onChangePage(i.page,0))})}calcNumberOfPage(){this.iteration=0==this.recordLimit?0:this.totalTableRecords/this.recordLimit,this.iteration=this.iteration<0?0:this.iteration>Number(this.iteration.toFixed())?Number(this.iteration.toFixed())+1:Number(this.iteration.toFixed())}onChangePage(i,p){this.calcNumberOfPage(),this.pages=[];for(var g=1;g<=this.iteration;g++)this.pages[g-1]=g;(i!=this.activePageNumber||p)&&(this.activePageNumber=i,this.onChange.emit({page:i,limit:this.recordLimit}))}queryLimitChange(i){this.recordLimit="ALL"==i?0:parseInt(i),this.onChangePage(1,1)}changePage(i){if(!(-1==i&&this.activePageNumber<=1||1==i&&this.iteration<=this.activePageNumber)){var p=this.activePageNumber+Number(i);this.calcNumberOfPage(),-1==p&&(p=0),p>this.iteration&&(p=this.iteration),this.onChangePage(p,0)}}showPages(i){if(i>this.activePageNumber-5&&this.activePageNumber+5>i)return!0}}return d.\u0275fac=function(i){return new(i||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-pagination"]],inputs:{totalTableRecords:"totalTableRecords",paginationValues:"paginationValues"},outputs:{onChange:"onChange"},decls:1,vars:1,consts:[["class","pagination-wrapper mt-0",4,"ngIf"],[1,"pagination-wrapper","mt-0"],[1,"pagination"],["mat-icon-button","",3,"click"],["ngFor","",3,"ngForOf"],["class","button","mat-icon-button","",3,"pagination_active","click",4,"ngIf"],["mat-icon-button","",1,"button",3,"click"]],template:function(i,p){1&i&&o.YNc(0,M,9,1,"div",0),2&i&&o.Q6J("ngIf",p.totalTableRecords&&p.totalTableRecords>0&&p.selectedLimit<p.totalTableRecords)},dependencies:[h.sg,h.O5,m.lW,C.Hw],styles:[".flm[_ngcontent-%COMP%]{float:left;margin-top:10px}button[_ngcontent-%COMP%]{color:#8d6dff}.button[_ngcontent-%COMP%]{background-color:#e7e6f897;margin:3px}.pagination_active[_ngcontent-%COMP%]{background-color:#8d6dff;color:#fff;margin:3px}"]}),d})()}}]);