import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template:
  `<div class="container">
    <div class="row">
      <div class="col-xs-12">
          <p><label>Well Done! &nbsp; </label>You successfully read this important alert message.</p>
      </div>
  </div>
</div>`,
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
