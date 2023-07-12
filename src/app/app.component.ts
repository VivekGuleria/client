import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UserService } from './services/user.service';
import { TimeoutserviceService } from './services/timeoutservice.service';
import { EnvironmentService } from './services/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@HostListener('window:beforeunload')
@HostListener('window:onbeforeunload')
@HostListener('window:onload')

export class AppComponent implements OnInit {

  isPageRefreshed: Boolean = false;
  constructor(private router: Router,
    private user: UserService,
    private http: HttpClient,
    private timeOutService: TimeoutserviceService,
    private env: EnvironmentService) {
  }

  ngOnInit() {
    this.http.get('assets/config/config.prod.json').subscribe((data: any) => {
      this.user.changeUrl(data);
    })
    this.timeOutService.start();
    this.isPageRefreshed = false;
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });


    // this.router.events
    //   .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
    //   .subscribe(event => {
    //     console.log("page refreshing")
    //     if (
    //       event.id === 1 &&
    //       event.url === event.urlAfterRedirects
    //     ) {
    //       console.log("page refresh");
    //       this.isPageRefreshed = true;
    //     }
    //   })
  }


  // checkRefresh() {
  //   this.router.events
  //     .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
  //     .subscribe(event => {
  //       console.log("page refreshing")
  //       if (
  //         event.id === 1 &&
  //         event.url === event.urlAfterRedirects
  //       ) {
  //         console.log("page refresh");
  //         this.isPageRefreshed = true;
  //       }
  //     })
  // }


}
