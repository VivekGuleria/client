import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { NotificationService } from "src/app/services/notification.service";
import { UserService } from "src/app/services/user.service";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { TermofuseService } from "./termofuse.service";
import { DashboardservicesService } from "../dashboard/dashboardservices.service";

@Component({
  selector: "app-term-of-use",
  templateUrl: "./term-of-use.component.html",
  styleUrls: ["./term-of-use.component.scss"],
})
export class TermOfUseComponent implements OnInit {
  acceptchk: boolean = false;
  acceptTerms: any;
  ipAddress: any;
  ipdetails: any;
  fileURL: any;
  hidecheck: boolean = false;
  termsAndCondition: any;
  visible: boolean = false;
  totalPages: any;
  page: any;
  data: any;
  id: any;
  pdf: boolean = false;

  filename: any;
  termsofusedata: any;

  constructor(
    private spinner: NgxSpinnerService,
    private http: HttpClient,
    private notificationService: NotificationService,
    private userService: UserService,
    private router: Router,
    private termsOfUseService: TermofuseService,
    private dashboard: DashboardservicesService
  ) {
    console.log("-----A");
    this.http.get<any>("https://geolocation-db.com/json/").subscribe((data) => {
      this.ipdetails = data;
      this.ipAddress = data.IPv4;
    });
  }

  ngOnInit(): void {
    console.log("termsfouse");
    this.dashboard.getTermsOfUse().subscribe((res: any) => {
      console.log(res);
      this.termsofusedata = res;
      console.log(this.termsofusedata);
      this.filename = res.filename;
    });
    this.getFileData();
  }

  getFileData() {
    console.log("-----D");
    this.spinner.show();
    this.termsOfUseService.getFile().subscribe((res: any) => {
      console.log(res, 61);
      this.spinner.hide();
      this.fileURL = `assets/tnc/TermsOfUse_v1.1.pdf`;
      console.log(this.fileURL);
    });
  }

  pageRendered(e: any) {
    console.log("(page-rendered)", e.pageNumber);
  }

  afterLoadComplete(pdf: any) {
    this.totalPages = pdf.numPages;
  }

  pagechanging(e: any) {
    if (e.pageNumber == this.totalPages) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  checkaccept() {
    if (this.acceptTerms == true) {
      this.acceptchk = true;
    } else {
      this.acceptchk = false;
    }
  }

  confirm() {
    var t = `By Clicking “Okay” button, I am accepting version ${this.termsofusedata.version} of Terms Of Use
    from IP- ${this.ipAddress}, Location-${this.ipdetails.city},${this.ipdetails.state}, ${this.ipdetails.country_name}`;
    Swal.fire({
      // title: 'Are you sure?',
      text: t,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Okay",
    }).then((result) => {
      if (result.isConfirmed) {
        this.accpetTermsOfUse();
      }
    });
  }

  accpetTermsOfUse() {
    let payload = {
      merchantId: this.userService.userValue.merchantId,
      type: "TERMS_Of_USE",
      userDetails: {
        userId: this.userService.userValue.id,
        ipAddress: this.ipAddress,
        city: this.ipdetails.city,
        state: this.ipdetails.state,
        country: this.ipdetails.country_name,
        userEmail: this.userService.userValue.userEmail,
      },
      termsOfUse: {
        filename: this.termsofusedata.filename,
        version: this.termsofusedata.version,
        id: this.termsofusedata.id,
      },
    };

    console.log(payload)
    this.spinner.show();
    this.termsOfUseService.saveTermsOfUse(payload).subscribe((res:any)=>{
      this.spinner.hide();
    this.router.navigate(['/dashboard']);
      this.checkTermsOfUse();
      this.notificationService.showSuccess(res.message, '');
    });
  }

  checkTermsOfUse() {
    console.log("-----C");
    this.termsOfUseService.getTermsOfUse().subscribe((res: any) => {
      console.log(res);
      this.data = res.status;
      this.id = res.id;
      this.filename = res.filename;
      console.log(this.data);
      if (this.data == "PENDING") {
        this.hidecheck = false;
      } else {
        this.hidecheck = true;
      }
    });
  }
}
