"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[7370],{87370:(ae,f,a)=>{a.r(f),a.d(f,{TeacherFeesCollectionModule:()=>oe});var d=a(36895),m=a(89299),b=a(77579),_=a(80574),e=a(94650),u=a(24006),x=a(64371),C=a(91081),M=a(87129),Z=a(38283),O=a(86898),v=a(11005),P=a(67598),T=a(40346),F=a(4859),y=a(56709),A=a(97392),k=a(51572),U=a(3238),I=a(23312),q=a(88789);const w=["receipt"];function S(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(t);const c=e.oxw().$implicit,l=e.oxw();return e.KtG(l.studentFeesPay(c))}),e._uU(1,"Pay Offline"),e.qZA()}}function N(n,i){if(1&n&&(e.TgZ(0,"button",28),e._uU(1,"Fee Paid"),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("disabled",t.paidFees===t.totalFees)}}function B(n,i){if(1&n&&(e.TgZ(0,"tbody")(1,"tr")(2,"td")(3,"p",23),e._uU(4),e.qZA()(),e.TgZ(5,"th"),e.YNc(6,S,2,0,"button",24),e.YNc(7,N,2,1,"button",25),e.qZA(),e.TgZ(8,"td")(9,"p",23),e._uU(10),e.ALo(11,"titlecase"),e.qZA()(),e.TgZ(12,"td")(13,"p",23),e._uU(14),e.qZA()(),e.TgZ(15,"td")(16,"p",23),e._uU(17),e.qZA()(),e.TgZ(18,"td")(19,"p",23),e._uU(20),e.qZA()(),e.TgZ(21,"td")(22,"p",23),e._uU(23),e.qZA()(),e.TgZ(24,"td")(25,"p",23),e._uU(26),e.qZA()(),e.TgZ(27,"td",23)(28,"mat-icon",26),e._uU(29,"launch"),e.qZA()(),e.TgZ(30,"td")(31,"p",23),e._uU(32),e.qZA()()()()),2&n){const t=i.$implicit,o=i.index;e.xp6(4),e.Oqu(o+1),e.xp6(2),e.Q6J("ngIf",t.paidFees!==t.totalFees),e.xp6(1),e.Q6J("ngIf",t.paidFees===t.totalFees),e.xp6(3),e.Oqu(e.lcZ(11,12,t.name)),e.xp6(4),e.Oqu(t.admissionNo),e.xp6(3),e.Oqu(t.rollNumber),e.xp6(3),e.hij(" \u20b9 ",t.paidFees,""),e.xp6(3),e.hij(" \u20b9 ",t.dueFees,""),e.xp6(3),e.hij(" \u20b9 ",t.totalFees,""),e.xp6(2),e.hYB("routerLink","/teacher/student/fees/class/statement/",t.class,"/",t.studentId,""),e.xp6(4),e.Oqu(t.session)}}function j(n,i){if(1&n&&(e.TgZ(0,"div")(1,"p",39),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.Oqu(t.errorMsg)}}function J(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"td",37),e._uU(2),e.qZA(),e.TgZ(3,"td",40),e._uU(4),e.qZA(),e.BQk()),2&n){const t=i.$implicit;e.xp6(2),e.hij(" ",t.key," "),e.xp6(2),e.hij(" \u20b9 ",t.value," ")}}function z(n,i){if(1&n&&(e.ynx(0),e.YNc(1,J,5,2,"ng-container",12),e.ALo(2,"keyvalue"),e.BQk()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t))}}function Y(n,i){if(1&n&&(e.TgZ(0,"tr"),e.ynx(1),e.YNc(2,z,3,3,"ng-container",12),e.BQk(),e.qZA()),2&n){const t=i.$implicit;e.xp6(2),e.Q6J("ngForOf",t)}}function Q(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"mat-checkbox",45),e.NdJ("click",function(){e.CHM(t);const c=e.oxw(3);return e.KtG(c.feesPay(c.payNow))}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw(3);e.xp6(1),e.hij("Allow ",t.paybleInstallment[0][0]," Installment")}}function R(n,i){if(1&n&&(e.TgZ(0,"p",46),e._uU(1),e.ALo(2,"lowercase"),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.hij("You are not allowed to pay the ",e.lcZ(2,1,t.paybleInstallment[0][0]),"")}}function L(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",41),e.YNc(1,Q,2,1,"mat-checkbox",42),e.YNc(2,R,3,3,"p",43),e.TgZ(3,"button",44),e.NdJ("click",function(){e.CHM(t);const c=e.oxw(2);return e.KtG(c.feesAddUpdate())}),e._uU(4),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf","Admission Fees"!==t.paybleInstallment[0][0]),e.xp6(1),e.Q6J("ngIf","Admission Fees"==t.paybleInstallment[0][0]),e.xp6(1),e.Q6J("disabled",!t.payNow),e.xp6(1),e.hij("Pay \u20b9 ",t.paybleInstallment[0][1],"")}}function G(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"form",29),e.NdJ("ngSubmit",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.feesAddUpdate())}),e.TgZ(1,"div",30),e.YNc(2,j,3,1,"div",31),e.TgZ(3,"div",1)(4,"div",32)(5,"div",33)(6,"table",34)(7,"tr")(8,"td"),e._UZ(9,"img",35),e._uU(10),e.qZA()()(),e.TgZ(11,"table",36)(12,"tr")(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA()()(),e.TgZ(19,"table",36)(20,"tr")(21,"td",37),e._uU(22,"Admission No. :"),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.qZA(),e.TgZ(25,"td",37),e._uU(26,"Class :"),e.qZA(),e.TgZ(27,"td"),e._uU(28),e.ALo(29,"classSuffix"),e.qZA()(),e.TgZ(30,"tr")(31,"td",37),e._uU(32,"Student Name :"),e.qZA(),e.TgZ(33,"td"),e._uU(34),e.ALo(35,"titlecase"),e.qZA(),e.TgZ(36,"td",37),e._uU(37,"Father Name :"),e.qZA(),e.TgZ(38,"td"),e._uU(39),e.qZA()()(),e.TgZ(40,"table",38)(41,"tr")(42,"td",37),e._uU(43,"Paid Fee"),e.qZA(),e.TgZ(44,"td"),e._uU(45),e.qZA(),e.TgZ(46,"td",37),e._uU(47,"Due Fee"),e.qZA(),e.TgZ(48,"td"),e._uU(49),e.qZA(),e.TgZ(50,"td",37),e._uU(51,"Total Fee"),e.qZA(),e.TgZ(52,"td"),e._uU(53),e.qZA()()(),e.TgZ(54,"table",38),e.YNc(55,Y,3,1,"tr",12),e.ALo(56,"chunk"),e.qZA()()()()(),e.YNc(57,L,5,4,"div",21),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("formGroup",t.feesForm),e.xp6(2),e.Q6J("ngIf",t.errorCheck),e.xp6(8),e.hij(" ",null==t.schoolInfo?null:t.schoolInfo.schoolName," "),e.xp6(4),e.hij(" School Code : ",null==t.schoolInfo?null:t.schoolInfo.schoolCode," "),e.xp6(2),e.hij(" School Fee - ",t.singleStudent.session," "),e.xp6(2),e.hij(" Affiliation No. : ",null==t.schoolInfo?null:t.schoolInfo.affiliationNumber," "),e.xp6(6),e.Oqu(t.singleStudent.admissionNo),e.xp6(4),e.Oqu(e.lcZ(29,15,t.singleStudent.class)),e.xp6(6),e.Oqu(e.lcZ(35,17,t.singleStudent.name)),e.xp6(5),e.Oqu(t.singleStudent.fatherName),e.xp6(6),e.hij("\u20b9 ",t.singleStudent.paidFees,""),e.xp6(4),e.hij("\u20b9 ",t.singleStudent.dueFees,""),e.xp6(4),e.hij("\u20b9 ",t.singleStudent.totalFees,""),e.xp6(2),e.Q6J("ngForOf",e.xi3(56,19,t.singleStudent.installment,3)),e.xp6(2),e.Q6J("ngIf",t.paybleInstallment[0][1]>0&&!t.receiptMode)}}function $(n,i){if(1&n&&(e.TgZ(0,"td",50),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.hij(" ",t.key," Fee")}}function D(n,i){if(1&n&&(e.TgZ(0,"td",50),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.hij(" \u20b9 ",t.value,"")}}function E(n,i){if(1&n&&(e.TgZ(0,"tr",49)(1,"td",50),e._uU(2),e.qZA(),e.YNc(3,$,2,1,"td",54),e.ALo(4,"keyvalue"),e.YNc(5,D,2,1,"td",54),e.ALo(6,"keyvalue"),e.qZA()),2&n){const t=i.$implicit,o=i.index;e.xp6(2),e.hij("",o+1,"."),e.xp6(1),e.Q6J("ngForOf",e.lcZ(4,3,t)),e.xp6(2),e.Q6J("ngForOf",e.lcZ(6,5,t))}}function H(n,i){if(1&n&&(e.TgZ(0,"div",30)(1,"div",1)(2,"div",32,47)(4,"div",33)(5,"table",34)(6,"tr"),e._UZ(7,"td"),e.TgZ(8,"td"),e._UZ(9,"img",35),e._uU(10),e.qZA()()(),e.TgZ(11,"table",36)(12,"tr")(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA()()(),e.TgZ(19,"table",36)(20,"tr")(21,"td",37),e._uU(22,"Receipt No. :"),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.qZA(),e.TgZ(25,"td",37),e._uU(26,"Admission No. :"),e.qZA(),e.TgZ(27,"td"),e._uU(28),e.qZA()(),e.TgZ(29,"tr")(30,"td",37),e._uU(31,"Class :"),e.qZA(),e.TgZ(32,"td"),e._uU(33),e.ALo(34,"classSuffix"),e.qZA(),e.TgZ(35,"td",37),e._uU(36,"Date Of Birth :"),e.qZA(),e.TgZ(37,"td"),e._uU(38),e.qZA()(),e.TgZ(39,"tr")(40,"td",37),e._uU(41,"Student Name :"),e.qZA(),e.TgZ(42,"td"),e._uU(43),e.ALo(44,"titlecase"),e.qZA(),e.TgZ(45,"td",37),e._uU(46,"Father Name :"),e.qZA(),e.TgZ(47,"td"),e._uU(48),e.qZA()()(),e.TgZ(49,"table",48)(50,"tr",49)(51,"th",50),e._uU(52,"S. No."),e.qZA(),e.TgZ(53,"th",50),e._uU(54,"Particulars"),e.qZA(),e.TgZ(55,"th",50),e._uU(56,"Fee Amount"),e.qZA()(),e.YNc(57,E,7,7,"tr",51),e.TgZ(58,"tr",52),e._UZ(59,"td"),e.TgZ(60,"td",53),e._uU(61,"Total Fee"),e.qZA(),e.TgZ(62,"td",37),e._uU(63),e.qZA()(),e.TgZ(64,"tr",52),e._UZ(65,"td"),e.TgZ(66,"td",53),e._uU(67,"Paid Fee"),e.qZA(),e.TgZ(68,"td",37),e._uU(69),e.qZA()(),e.TgZ(70,"tr",52),e._UZ(71,"td"),e.TgZ(72,"td",53),e._uU(73,"Due Fee"),e.qZA(),e.TgZ(74,"td",37),e._uU(75),e.qZA()(),e.TgZ(76,"tr"),e._UZ(77,"td"),e.TgZ(78,"td")(79,"p",49)(80,"span",37),e._uU(81),e.qZA(),e._uU(82," installment amount deposited "),e.TgZ(83,"span",37),e._uU(84),e.qZA()()(),e._UZ(85,"td"),e.qZA()(),e.TgZ(86,"p"),e._uU(87),e.qZA(),e.TgZ(88,"div")(89,"h4",37),e._uU(90,"Disclaimer:"),e.qZA(),e.TgZ(91,"p"),e._uU(92),e.qZA(),e.TgZ(93,"p"),e._uU(94,"2. Verification: Review receipt details for accuracy, including payment amount and purpose. Report discrepancies to the School Office for correction."),e.qZA(),e.TgZ(95,"p"),e._uU(96,"3. Non-Transferable: Intended for your use only; do not share it."),e.qZA(),e.TgZ(97,"p"),e._uU(98,"4. Record Keeping: Keep this receipt for future reference, reimbursement, or tax purposes."),e.qZA(),e.TgZ(99,"p"),e._uU(100,"5. Lost Receipt: If lost or damaged, contact the School Office for a duplicate. A fee may apply."),e.qZA(),e.TgZ(101,"p"),e._uU(102,"6. Refund Policy: Refer to our institution's refund policy for fee refund information. Generally, fees are non-refundable. Exceptions may apply for duplicate payments or inadvertent overpayments with proper documentation and school policy approval."),e.qZA()()()()()()),2&n){const t=e.oxw();e.xp6(10),e.hij(" ",null==t.schoolInfo?null:t.schoolInfo.schoolName," "),e.xp6(4),e.hij(" School Code : ",null==t.schoolInfo?null:t.schoolInfo.schoolCode," "),e.xp6(2),e.hij(" School Fee Receipt - ",t.singleStudent.session," "),e.xp6(2),e.hij(" Affiliation No. : ",null==t.schoolInfo?null:t.schoolInfo.affiliationNumber," "),e.xp6(6),e.Oqu(t.receiptInstallment.receiptNo),e.xp6(4),e.Oqu(t.singleStudent.admissionNo),e.xp6(5),e.Oqu(e.lcZ(34,18,t.singleStudent.class)),e.xp6(5),e.Oqu(t.singleStudent.dob),e.xp6(5),e.Oqu(e.lcZ(44,20,t.singleStudent.name)),e.xp6(5),e.Oqu(t.singleStudent.fatherName),e.xp6(9),e.Q6J("ngForOf",null==t.clsFeesStructure?null:t.clsFeesStructure.feesType),e.xp6(6),e.hij("\u20b9 ",t.receiptInstallment.totalFees,""),e.xp6(6),e.hij("\u20b9 ",t.receiptInstallment.paidFees,""),e.xp6(6),e.hij("\u20b9 ",t.receiptInstallment.dueFees,""),e.xp6(6),e.hij(" ",t.receiptInstallment.feesInstallment,""),e.xp6(3),e.hij("\u20b9 ",t.receiptInstallment.feesAmount," /-"),e.xp6(3),e.hij("Date : ",t.receiptInstallment.paymentDate,""),e.xp6(5),e.hij("1. Payment Responsibility: Confirms your obligation to ",null==t.schoolInfo?null:t.schoolInfo.schoolName," for listed fees.")}}function K(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",41)(1,"button",55),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.printReceipt())}),e._uU(2,"Print"),e.qZA()()}}function V(n,i){1&n&&e._UZ(0,"mat-progress-spinner",60)}function W(n,i){if(1&n&&(e.TgZ(0,"div",58),e.YNc(1,V,1,0,"mat-progress-spinner",59),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.loader)}}function X(n,i){if(1&n&&(e.TgZ(0,"div",56),e.YNc(1,W,2,1,"div",57),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.loader)}}const ee=[{path:"",component:(()=>{class n{constructor(t,o,c,l,g,r,s,p){this.fb=t,this.activatedRoute=o,this.teacherAuthService=c,this.teacherService=l,this.schoolService=g,this.printPdfService=r,this.feesService=s,this.feesStructureService=p,this.showModal=!1,this.updateMode=!1,this.deleteMode=!1,this.deleteById="",this.successMsg="",this.errorMsg="",this.errorCheck=!1,this.feesInfo=[1,2,3,4,5],this.recordLimit=10,this.filters={},this.number=0,this.paginationValues=new b.x,this.page=0,this.showBulkFeesModal=!1,this.movies=[],this.selectedValue=0,this.fileChoose=!1,this.existRollnumber=[],this.studentList=[],this.payNow=!1,this.receiptInstallment={},this.receiptMode=!1,this.collectedBy="",this.loader=!0,this.feesForm=this.fb.group({class:[""],studentId:[""],feesAmount:[""],feesInstallment:[""],collectedBy:[""]})}ngOnInit(){this.getSchool(),this.cls=this.activatedRoute.snapshot.paramMap.get("id"),this.teacherInfo=this.teacherAuthService.getLoggedInTeacherInfo(),this.teacherInfo&&this.getTeacherById(this.teacherInfo.id),this.feesStructureByClass(this.cls),this.getAllStudentFeesCollectionByClass(this.cls)}getTeacherById(t){this.teacherService.getTeacherById(t).subscribe(o=>{o&&(this.collectedBy=`${o.name} (${o.teacherUserId})`)})}printReceipt(){this.printPdfService.printElement(this.receipt.nativeElement),this.closeModal()}getSchool(){this.schoolService.getSchool().subscribe(t=>{t&&(this.schoolInfo=t)})}getAllStudentFeesCollectionByClass(t){this.feesService.getAllStudentFeesCollectionByClass(t).subscribe(o=>{if(o){let c=o.studentFeesCollection;const g=new Map(o.studentInfo.map(s=>[s._id,s])),r=c.map(s=>({...g.get(s.studentId),...s}));this.studentList=r,setTimeout(()=>{this.loader=!1},1e3)}})}feesStructureByClass(t){this.feesStructureService.feesStructureByClass(t).subscribe(o=>{o&&(this.clsFeesStructure=o)})}closeModal(){this.showModal=!1,this.showBulkFeesModal=!1,this.updateMode=!1,this.successMsg="",this.errorMsg="",this.payNow=!1,this.paybleInstallment=[],this.paybleInstallment=[0,0],this.receiptInstallment={},this.receiptMode=!1,this.getAllStudentFeesCollectionByClass(this.cls)}feesPay(t){!1===t&&(this.payNow=!0),!0===t&&(this.payNow=!1)}studentFeesPay(t){this.singleStudent=t;const o=t.admissionFees,c=this.clsFeesStructure.admissionFees,l=t.admissionFeesPayable;if("Admission"in this.clsFeesStructure.feesType[0]&&this.clsFeesStructure.feesType.shift(),1==l&&(this.clsFeesStructure.feesType=[{Admission:this.clsFeesStructure.admissionFees},...this.clsFeesStructure.feesType]),0==o&&1==l&&(this.paybleInstallment=[["Admission Fees",c]]),o>0&&1==l||0==o&&0==l){const r=this.singleStudent.installment.find(s=>{const[p,h]=Object.entries(s)[0];return 0===h});if(r){const[s,p]=Object.entries(r)[0];this.paybleInstallment=this.clsFeesStructure.installment.flatMap(h=>Object.entries(h).filter(([ie,se])=>ie===s))}else this.paybleInstallment=[0,0]}this.showModal=!0,this.deleteMode=!1,this.updateMode=!1,this.feesForm.reset()}updateFeesModel(t){this.showModal=!0,this.deleteMode=!1,this.updateMode=!0}deleteFeesModel(t){this.showModal=!0,this.updateMode=!1,this.deleteMode=!0,this.deleteById=t}feesAddUpdate(){this.feesForm.valid&&(this.updateMode?this.feesService.updateFees(this.feesForm.value).subscribe(t=>{t&&(this.closeModal(),this.successMsg=t)},t=>{this.errorCheck=!0,this.errorMsg=t.error}):(this.feesForm.value.class=this.singleStudent.class,this.feesForm.value.collectedBy=this.collectedBy,this.feesForm.value.studentId=this.singleStudent.studentId,this.feesForm.value.feesInstallment=this.paybleInstallment[0][0],this.feesForm.value.feesAmount=this.paybleInstallment[0][1],"Admission Fees"==this.paybleInstallment[0][0]?this.feesService.addAdmissionFees(this.feesForm.value).subscribe(t=>{t&&(this.receiptMode=!0,this.receiptInstallment={class:t.className,receiptNo:t.admissionFeesReceiptNo,studentId:t.studentId,totalFees:t.totalFees,paidFees:t.paidFees,dueFees:t.dueFees,feesInstallment:"Admission Fees",feesAmount:t.admissionFees,paymentDate:t.admissionFeesPaymentDate})},t=>{this.errorCheck=!0,this.errorMsg=t.error}):(console.log(this.feesForm.value),this.feesService.addFees(this.feesForm.value).subscribe(t=>{t&&(this.receiptMode=!0,this.receiptInstallment=t)},t=>{this.errorCheck=!0,this.errorMsg=t.error}))))}handleImport(t){this.fileChoose=!0;const o=t.target.files;if(o.length){const c=o[0],l=new FileReader;l.onload=g=>{const r=(0,_.ij)(g.target.fees),s=r.SheetNames;if(s.length){const p=_.P6.sheet_to_json(r.Sheets[s[0]]);this.movies=p}},l.readAsArrayBuffer(c)}}onChange(t){this.selectedValue=t.value}addBulkFeesModel(){this.showBulkFeesModal=!0}addBulkFees(){this.feesService.addBulkFees(this.movies).subscribe(t=>{t&&(this.successMsg=t)},t=>{this.errorCheck=!0,this.errorMsg=t.error.errMsg,this.existRollnumber=t.error.existRollnumber})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.qu),e.Y36(m.gz),e.Y36(x.J),e.Y36(C.S),e.Y36(M.E),e.Y36(Z.Z),e.Y36(O.$),e.Y36(v.t))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-teacher-fees-collection"]],viewQuery:function(t,o){if(1&t&&e.Gf(w,5),2&t){let c;e.iGM(c=e.CRH())&&(o.receipt=c.first)}},decls:55,vars:10,consts:[[1,"container-fluid","dashboard-container"],[1,"row"],[1,"col-12","col-lg-2"],[1,"col-12","col-lg-10"],[1,"col-12","big-container"],[1,"col-lg-12","offset-lg-0"],[1,"main-card","pb-4"],[1,"col-12","col-lg-4","pt-2","pb-2"],[1,"col-12"],[1,"table","table-hover","align-middle","mt-2","mb-1","bg-white"],[1,"bg-light"],[1,"text-muted"],[4,"ngFor","ngForOf"],[1,"modal","fade","show"],["role","document",1,"modal-dialog","modal-dialog-scrollable","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["matRipple","",3,"click"],[3,"formGroup","ngSubmit",4,"ngIf"],["class","modal-body",4,"ngIf"],["class","modal-footer",4,"ngIf"],["class","spinner-container",4,"ngIf"],[1,"mb-0"],["style","background-color: transparent;color: #8d6dff;border: 1px solid #8d6dff;","class","submit-button","mat-raised-button","",3,"click",4,"ngIf"],["class","submit-button","mat-raised-button","","style","background-color: transparent;",3,"disabled",4,"ngIf"],[2,"cursor","pointer",3,"routerLink"],["mat-raised-button","",1,"submit-button",2,"background-color","transparent","color","#8d6dff","border","1px solid #8d6dff",3,"click"],["mat-raised-button","",1,"submit-button",2,"background-color","transparent",3,"disabled"],[3,"formGroup","ngSubmit"],[1,"modal-body"],[4,"ngIf"],[1,"custom-container"],[1,"table-container"],[1,"logo-table","text-bold","text-center"],["src","../../../../assets/logo.png","alt",""],[1,"info-table","text-center"],[1,"text-bold"],[1,"custom-table"],[1,"error-message"],[2,"font-weight","400"],[1,"modal-footer"],["style","margin-right: 8px;","class","example-margin",3,"click",4,"ngIf"],["style","margin-right: 8px;","class","example-margin",4,"ngIf"],["mat-raised-button","","type","button",1,"submit-button",3,"disabled","click"],[1,"example-margin",2,"margin-right","8px",3,"click"],[1,"example-margin",2,"margin-right","8px"],["receipt",""],[1,"receipt-table"],[1,"text-center"],[1,"border"],["class","text-center",4,"ngFor","ngForOf"],[1,"text-center","receipt-row"],[1,"text-bold","text-right"],["class","border",4,"ngFor","ngForOf"],["mat-raised-button","",1,"submit-button","print-pdf",3,"click"],[1,"spinner-container"],["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"],["diameter","65","mode","indeterminate","strokeWidth","3",4,"ngIf"],["diameter","65","mode","indeterminate","strokeWidth","3"]],template:function(t,o){1&t&&(e._UZ(0,"app-header-nav"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2),e._UZ(4,"app-side-nav"),e.qZA(),e.TgZ(5,"div",3)(6,"div",1)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",1)(11,"div",7)(12,"div",1)(13,"div",8)(14,"h3"),e._uU(15,"Fee Payment >"),e.TgZ(16,"span"),e._uU(17),e.ALo(18,"classSuffix"),e.qZA()()()()()(),e.TgZ(19,"table",9)(20,"thead",10)(21,"tr",11)(22,"th"),e._uU(23,"No."),e.qZA(),e.TgZ(24,"th"),e._uU(25,"Fee Payment"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Student Name"),e.qZA(),e.TgZ(28,"th"),e._uU(29,"Admission No."),e.qZA(),e.TgZ(30,"th"),e._uU(31,"Roll Number"),e.qZA(),e.TgZ(32,"th"),e._uU(33,"Paid Fee"),e.qZA(),e.TgZ(34,"th"),e._uU(35,"Due Fee"),e.qZA(),e.TgZ(36,"th"),e._uU(37,"Total Fee"),e.qZA(),e.TgZ(38,"th"),e._uU(39,"Fee Statement"),e.qZA(),e.TgZ(40,"th"),e._uU(41,"Session"),e.qZA()()(),e.YNc(42,B,33,14,"tbody",12),e.qZA(),e.TgZ(43,"div",13)(44,"div",14)(45,"div",15)(46,"div",16)(47,"h5",17),e._uU(48,"Student Fee Payment"),e.qZA(),e.TgZ(49,"mat-icon",18),e.NdJ("click",function(){return o.closeModal()}),e._uU(50,"close"),e.qZA()(),e.YNc(51,G,58,22,"form",19),e.YNc(52,H,103,22,"div",20),e.YNc(53,K,3,0,"div",21),e.qZA()()()()()()()()()(),e.YNc(54,X,2,1,"div",22)),2&t&&(e.xp6(17),e.hij(" ",e.lcZ(18,8,o.cls),""),e.xp6(25),e.Q6J("ngForOf",o.studentList),e.xp6(1),e.ekj("show",o.showModal),e.xp6(8),e.Q6J("ngIf",!o.deleteMode&&o.paybleInstallment&&o.singleStudent&&!o.receiptMode),e.xp6(1),e.Q6J("ngIf",o.receiptMode&&o.receiptInstallment&&o.singleStudent),e.xp6(1),e.Q6J("ngIf",o.receiptMode),e.xp6(1),e.Q6J("ngIf",o.loader))},dependencies:[d.sg,d.O5,m.rH,P.R,T.s,F.lW,y.oG,A.Hw,k.Ou,U.wG,u._Y,u.JL,u.sg,d.i8,d.rS,d.Nd,I.S,q.N],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif;overflow-x:hidden}[_nghost-%COMP%]{--common-color: #fff;--header-height: 10vh}.header[_ngcontent-%COMP%]{background-color:var(--common-color);width:100%;min-height:var(--header-height);left:0;top:0;position:fixed;z-index:2;padding:0!important;display:flex;justify-content:space-around;box-shadow:0 0 1px -10px #64748d15,0 0 0 1px #4d5c7615,0 0 4px #64748d15}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;margin-left:0}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8d6dff;font:1em sans-serif;letter-spacing:.5px}.main-menu[_ngcontent-%COMP%]{display:none}.hamburger-icon[_ngcontent-%COMP%]{fill:#8d6dff;width:24px;height:24px}.hamburger-menu[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:100vh;height:200vh;position:absolute;left:0;z-index:1000;top:0;display:block}.hamburger-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:large;color:#525098eb!important}.hamburger-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;margin-top:5px;color:#525098eb!important}.hamburger-menu[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{color:#525098eb!important;font-size:28px;margin-top:3.5vh;margin-left:88%}.top-hamburger-menu[_ngcontent-%COMP%]{display:none}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#4e4caa24}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#4e4caa32}.side-navbar[_ngcontent-%COMP%]{display:none}.dashboard-container[_ngcontent-%COMP%]{background-color:transparent;min-height:90vh;width:100%}.big-container[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:70vh;margin-top:1vh}.main-card[_ngcontent-%COMP%]{min-height:70vh;width:100%;background-color:transparent}.main-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4e4caacd;letter-spacing:.6px;font-size:18px}.modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4e4caacd;letter-spacing:.5px;font-size:16px}h4[_ngcontent-%COMP%]{color:#4e4caacd}p[_ngcontent-%COMP%]{color:#4e4caacd;font-size:15px}.category-card[_ngcontent-%COMP%]{background:#ebebff;height:200px;border-radius:15px;cursor:pointer}.category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin-top:25%;letter-spacing:.6px;font-size:18px;color:#4e4caacd}.form-control[_ngcontent-%COMP%]{height:45px;color:#4e4caacd;border:2px solid #e1dfeed7}.form-control[_ngcontent-%COMP%]::placeholder{color:#4e4caa83;font-size:15px}.form-control[_ngcontent-%COMP%]:focus{border-color:#4e4caa46;box-shadow:0 0 0 1px #4e4caa1e}.text-danger[_ngcontent-%COMP%]{font-size:12px}.submit-button[_ngcontent-%COMP%]{height:42px;background:#8d6dff;color:#fff;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#ebebff;color:#4e4caacd;cursor:not-allowed}.status-active[_ngcontent-%COMP%]{color:#8d6dff;font-weight:500;cursor:pointer;text-decoration:none}.status-inactive[_ngcontent-%COMP%]{color:#4e4caacd;cursor:pointer;text-decoration:none}.table[_ngcontent-%COMP%]{height:auto;display:block;width:100%;overflow-y:auto;overflow-x:auto}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{white-space:nowrap;color:#4e4caacd}table[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#4e4caacd;cursor:pointer}.table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4e4caacd}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center}.modal.fade.show[_ngcontent-%COMP%]{display:block;z-index:10!important;background:rgba(0,0,0,.5)}.modal-header[_ngcontent-%COMP%]{background-color:#8d6dff;top:0;position:sticky;z-index:1}.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:#fff}.modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer;color:#fff}.modal-footer[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background-color:#fff}.modal-body[_ngcontent-%COMP%]{overflow-y:auto;max-height:calc(80vh - 2.3 * 3.5rem)}.modal-dialog[_ngcontent-%COMP%]{height:80vh}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:185%}.modal-title[_ngcontent-%COMP%]{color:#8d6dff;font-size:20px}.delete-button[_ngcontent-%COMP%]{background:#eeecf5;color:#4a4a71;box-shadow:none}.success-message[_ngcontent-%COMP%]{color:#16b978;font-size:20px}.error-message[_ngcontent-%COMP%]{color:#e4409a}  mat-form-field{width:100%!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#4e4caac1!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#4e4caac1!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#4e4caac1!important;opacity:.8!important}  .mat-input-element{caret-color:#4e4caac1!important}  .mat-form-field-invalid .mat-input-element, .mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#4e4caac1!important}  .mat-form-field-label{color:#4e4caac1!important}  .mat-form-field.mat-focused .mat-form-field-label{color:#4e4caac1!important}  .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#4e4caac1!important}  .mat-radio-button{color:#4e4caac1;margin-right:20px;margin-bottom:5px}  .mat-radio-outer-circle{border:1px solid #4e4caac1}  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#8d6dff}  .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#8d6dff}  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#0000001a!important}.mat-checkbox[_ngcontent-%COMP%]{color:#4e4caac1}  .mat-checkbox-frame{border-color:#4e4caac1!important}  .mat-checkbox-ripple .mat-ripple-element{background-color:#8d6dff!important}  .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#8d6dff!important}  .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#8d6dff!important}  .mat-slide-toggle-bar{height:27px!important;width:48px!important;border-radius:36px!important;background-color:#d3cde8}  .mat-slide-toggle-thumb{top:6px!important;right:-6px!important;position:relative!important;background-color:#fff!important}  .mat-slide-toggle.mat-checked .mat-ripple-element{background-color:transparent}  .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#8d6dff!important}  .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#fff!important}@media (min-width: 576px) and (max-width:991.98px){.header[_ngcontent-%COMP%], .side-navbar[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]{display:none}}@media (min-width: 992px){.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:55px;margin-left:50px}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1.1em sans-serif;letter-spacing:.5px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1em sans-serif;letter-spacing:.4px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]{display:inline-block}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#8d6dff;margin-left:20px;cursor:pointer}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{color:#8d6dff;font:1.2em sans-serif;letter-spacing:.85px}.desktop-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#525098eb}.desktop-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;margin-top:2px;color:#525098eb}.hamburger[_ngcontent-%COMP%], .hamburger-menu[_ngcontent-%COMP%], .hamburger-icon[_ngcontent-%COMP%]{display:none}.side-navbar[_ngcontent-%COMP%]{height:90vh;width:16.5%;position:fixed;left:0;padding-top:2vh;padding-bottom:10vh;display:block;justify-content:space-around;background-color:#fff;overflow-x:auto;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#8d6dff;width:100%;padding:5px;display:block;flex-direction:column}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;display:inline-block;margin-left:5px;margin-top:5px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:1.1em;font-weight:400;text-align:center;margin-left:15px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active-link[_ngcontent-%COMP%]{background:#8d6dff;color:#fff}.dashboard-container[_ngcontent-%COMP%]{width:auto;background-color:#64748d15;padding-bottom:1.5vh}.big-container[_ngcontent-%COMP%]{background-color:#fff;min-height:87vh;width:98.5%;margin-top:1.5vh;margin-left:.75%;border-radius:10px;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.main-card[_ngcontent-%COMP%]{min-height:70vh;padding-left:2px;padding-right:2px}.table[_ngcontent-%COMP%]{display:inline-table;width:100%}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:100%}}.custom-container[_ngcontent-%COMP%]{font-family:Arial,sans-serif;overflow:auto}.table-container[_ngcontent-%COMP%]{background-color:#fff;border:none;padding:25px;margin-top:2vh}.logo-table[_ngcontent-%COMP%]{width:800px;border:none;font-size:1.3em;margin-top:2vh;margin-bottom:5vh;letter-spacing:.5px;display:inline-table}.logo-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px;border:none;text-align:center}.info-table[_ngcontent-%COMP%]{width:800px;border:none;font-size:1em;letter-spacing:.25px;margin-bottom:5vh;display:inline-table}img[_ngcontent-%COMP%]{height:35px}.info-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px;border:none}.custom-table[_ngcontent-%COMP%]{width:800px;font-size:1em;letter-spacing:.25px;margin-bottom:20px;border:1px solid #ccc;display:inline-table}.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px;border:1px solid rgb(218,218,222);text-align:center}.receipt-table[_ngcontent-%COMP%]{width:800px;font-size:1em;letter-spacing:.25px;margin-bottom:20px;border:1px solid rgb(218,218,222);display:inline-table}.receipt-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px}.receipt-table[_ngcontent-%COMP%]   .receipt-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:5px;padding-top:5px}.text-right[_ngcontent-%COMP%]{text-align:right}.border[_ngcontent-%COMP%]{border:1px solid #ccc}.text-center[_ngcontent-%COMP%]{text-align:center}.text-bold[_ngcontent-%COMP%]{font-weight:700}.print-pdf[_ngcontent-%COMP%]{display:none}@media (min-width: 576px) and (max-width:991.98px){.table-container[_ngcontent-%COMP%]{margin-top:1vh;border:1px solid #ccc}.logo-table[_ngcontent-%COMP%], .info-table[_ngcontent-%COMP%]{width:100%}.custom-table[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]{width:100%;font-size:10px}.print-pdf[_ngcontent-%COMP%]{display:inline-block}}@media (min-width: 992px){.table-container[_ngcontent-%COMP%]{margin-top:1vh;margin-bottom:2vh;border-radius:5px}.logo-table[_ngcontent-%COMP%], .info-table[_ngcontent-%COMP%]{width:100%}.custom-container[_ngcontent-%COMP%]{font-family:Arial,sans-serif;overflow:auto}.custom-table[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]{width:100%}.print-pdf[_ngcontent-%COMP%]{display:inline-block}}"]}),n})()}];let te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.Bz.forChild(ee),m.Bz]}),n})();var ne=a(79516);let oe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,te,ne.k]}),n})()}}]);