import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { NotificationService } from '../services/notification.service';
const MINUTES_UNITL_AUTO_LOGOUT = 60; // in mins
const CHECK_INTERVAL = 15000; // in ms
const STORE_KEY = 'lastAction';

@Injectable({
  providedIn: 'root',
})
export class TimeoutserviceService {
  public getLastAction() {
    return parseInt(localStorage.getItem(STORE_KEY));
  }

  public setLastAction(lastAction: number) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
  }

  constructor(private router: Router, private userService: UserService, private notificationService: NotificationService) {
    this.start();
  }

  start() {
    this.check();
    this.initListener();
    this.initInterval();
    localStorage.setItem(STORE_KEY, Date.now().toString());
  }

  initListener() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover', () => this.reset());
    document.body.addEventListener('mouseout', () => this.reset());
    document.body.addEventListener('keydown', () => this.reset());
    document.body.addEventListener('keyup', () => this.reset());
    document.body.addEventListener('keypress', () => this.reset());
  }

  reset() {
    this.setLastAction(Date.now());
  }

  initInterval() {
    setInterval(() => {
      this.check();
    }, CHECK_INTERVAL);
  }

  check() {
    if (!this.userService.userValue) return;

    const MINUTES_UNITL_AUTO_LOGOUT = this.userService.userValue.idleTimeout;
    const now = Date.now();
    const timeleft =
      this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;

    if (isTimeout) {
      localStorage.clear();
      this.notificationService.showError("", "Your session has timed out. Please login again.");
      this.router.navigate(['./login']);
    }
  }
}
