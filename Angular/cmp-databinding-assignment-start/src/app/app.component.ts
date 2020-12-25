import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  count = 0;
  interval;
  startCount() {
    
  }
  start() {
    this.interval = setInterval(() => { this.count++ }, 1000);
  }
  stop() {
    clearInterval(this.interval)
  }
}
