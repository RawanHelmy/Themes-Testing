import { Component } from '@angular/core';
import { AccountService } from './Shared/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts: { name: string, status: string }[] = [];
  constructor(private service: AccountService) {
    this.accounts = this.service.accounts;
  }
}
