import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../Shared/account.service';
import { LoggingService } from '../Shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();
  
  constructor(private service: LoggingService , private accountService : AccountService) {
    
  }
  onSetTo(status: string) {
    this.accountService.onStatusChanged(this.id, status);
    this.accountService.statusUpdate.emit(status);
    //this.service.LogNewStatu(status);
  }
}
