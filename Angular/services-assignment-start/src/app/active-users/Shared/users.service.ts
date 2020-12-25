import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({providedIn:'root'})
export class UserService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private CounterService: CounterService) {
        
    }
  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.CounterService.increment()
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.CounterService.increment()
  }
}