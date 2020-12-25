import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  userName = "";
  canResetUsername = false;
  constructor() { }

  ngOnInit(): void {
  }
  enableResetButton(event : Event) {
    this.canResetUsername = (<HTMLInputElement>event.target).value !== "" ? true : false;
  }
  ResetUserName() {
    this.userName = "";
    this.canResetUsername = false;
  }
}
