import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../auth/user.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription | undefined;
  user: any;

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
      this.user = user?.email;
      console.log(this.userSub);
    });
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

  onFetchData() {
    this.firebaseService.fetchRecipes().subscribe((recipes) => {
      console.log(recipes);
    });
  }
}
