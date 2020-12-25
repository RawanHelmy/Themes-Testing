import { Component } from '@angular/core';

import { UserService } from '../active-users/Shared/users.service';
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];
  
  constructor(private userService: UserService) {
    this.users = this.userService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}
