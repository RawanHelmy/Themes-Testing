import { Component , OnInit} from '@angular/core';
import { CounterService } from './active-users/Shared/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Counter: number = 0;
  constructor( private CounterService: CounterService) {
  }
  ngOnInit() {
    this.Counter = this.CounterService.counter;
  }
}
