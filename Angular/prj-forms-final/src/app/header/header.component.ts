import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit , OnDestroy{

  Usersub: Subscription;
  isLogedin = false;
  constructor(private store: DataStorageService, private AuthService: AuthService) { }
  ngOnInit() {
    this.Usersub =this.AuthService.user.subscribe((user) => {
      this.isLogedin = user ? true : false
    })
  }
  storeDate() {
    this.store.storeRecipes();
  }
  Logout() {
    this.AuthService.logOut();
  }
  getData() {
    this.store.getRecipes().subscribe();
  }
  ngOnDestroy() {
    this.Usersub.unsubscribe();
  }
}
