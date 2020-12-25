import { Component, Input, OnInit , Output , EventEmitter , OnChanges , SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit , OnChanges {
  @Input() count;
  @Output() onStart : EventEmitter<any> = new EventEmitter();
  @Output() onStop: EventEmitter<any> = new EventEmitter();
  odd = [];
  even = [];
  constructor() { }
  start() {
    this.onStart.emit(null);
  }
  stop() {
    this.onStop.emit(null);
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.count%2 ? this.even.push(this.count) : this.odd.push(this.count);
  }

}
