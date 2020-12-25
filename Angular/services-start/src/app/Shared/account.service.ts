import {EventEmitter, Injectable} from '@angular/core'
import { LoggingService } from "./logging.service";
@Injectable({providedIn: 'root'})
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
    constructor(private LoggingService: LoggingService) {
        
    }
    statusUpdate = new EventEmitter<string>();
      onAccountAdded(name: string, status: string ) {
          this.accounts.push({ name: name, status: status });
          this.LoggingService.LogNewStatu(status);
      }
    
      onStatusChanged(id: number, newStatus: string) {
          this.accounts[id].status = newStatus;
          this.LoggingService.LogNewStatu(newStatus);
      }
}