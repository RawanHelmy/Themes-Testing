import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: any;

  constructor() {
  }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable = new Observable(obs => {
      let count = 0;
      setInterval(() => {
        if (count === 5) {
          obs.complete();
        }
        if (count > 3)
        {
          obs.error(new Error('count greater than 3!'))
          }
        obs.next(count)
        count++
      } , 1000);
    })
    this.firstObsSubscription = customIntervalObservable.subscribe(count => console.log(count), error => {
      alert(error)
    }, ()=> {
      alert('completed')
    })
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
