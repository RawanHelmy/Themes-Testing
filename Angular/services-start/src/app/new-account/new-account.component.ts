import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../Shared/account.service';
import { LoggingService } from '../Shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();
  
  constructor(private service: LoggingService , private accountService : AccountService) {
    this.accountService.statusUpdate.subscribe(
      (status: string)=> alert('Status '+ status)
    )
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onAccountAdded( accountName, accountStatus);
    //this.service.LogNewStatu(accountStatus);
  }
}
