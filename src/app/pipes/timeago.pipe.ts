import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeAgo' })
export class TimeAgo implements PipeTransform {
  // transform(d: any): string {

  //   let currentDate = new Date(new Date().toUTCString());
  //   // console.log(currentDate);
    
  //   let date = d;
    
    
  //   console.log(date);
    
  //   let year = currentDate.getFullYear() - date.getFullYear();
  //   let month = currentDate.getMonth() - date.getMonth();
  //   let day = currentDate.getDate() - date.getDate();
  //   let hour = currentDate.getHours() - date.getHours();
  //   let minute = currentDate.getMinutes() - date.getMinutes();
  //   let second = currentDate.getSeconds() - date.getSeconds();

  //   let createdSecond = (year * 31556926) + (month * 2629746) + (day * 86400) + (hour * 3600) + (minute * 60) + second;

  //   if (createdSecond >= 31556926) {
  //     let yearAgo = Math.floor(createdSecond / 31556926);
  //     return yearAgo > 1 ? yearAgo + " years ago" : yearAgo + " year ago";
  //   } else if (createdSecond >= 2629746) {
  //     let monthAgo = Math.floor(createdSecond / 2629746);
  //     return monthAgo > 1 ? monthAgo + " m" : monthAgo + " m ";
  //   } else if (createdSecond >= 86400) {
  //     let dayAgo = Math.floor(createdSecond / 86400);
  //     return dayAgo > 1 ? dayAgo + " d" : dayAgo + " d";
  //   } else if (createdSecond >= 3600) {
  //     let hourAgo = Math.floor(createdSecond / 3600);
  //     return hourAgo > 1 ? hourAgo + " h" : hourAgo + " h";
  //   } else if (createdSecond >= 60) {
  //     let minuteAgo = Math.floor(createdSecond / 60);
  //     return minuteAgo > 1 ? minuteAgo + " minutes ago" : minuteAgo + " minute ago";
  //   } else if (createdSecond < 60) {
  //     return createdSecond > 1 ? createdSecond + " seconds ago" : createdSecond + " second ago";
  //   } else if (createdSecond < 0) {
  //     return "0 second ago";
  //   }
  // }

  transform(value: any, args?: any): any {
    if (value) {
    //   console.log(value);
      
        const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
        if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
            return 'Just now';
        const intervals = {
            'year': 31536000,
            'month': 2592000,
            'week': 604800,
            'day': 86400,
            'hour': 3600,
            'minute': 60,
            'second': 1
        };
        let counter;
        for (const i in intervals) {
            counter = Math.floor(seconds / intervals[i]);
            if (counter > 0)
                if (counter === 1) {
                    return counter + ' ' + i.slice(0,1); // singular (1 day ago)
                } else {
                    return counter + ' ' + i.slice(0,1) ; // plural (2 days ago)
                }
        }
    }
    return value;
}
}