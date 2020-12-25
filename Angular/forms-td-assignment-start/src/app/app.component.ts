import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: false }) f: NgForm;
  Subscriptions: string = 'Advanced'
  Email= ''
  Password = ''
  sub = ''
  submitted = false;

  onSubmit() {
    console.log(this.f)
    this.submitted = true;
    this.Email = this.f.value.email;
    this.Password = this.f.value.password;
    this.sub = this.f.value.Subscriptions;
    this.f.reset();
  }
}
