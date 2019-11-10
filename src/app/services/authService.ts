import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  role: any;
  isAdmin: any;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) { }
 
  login(user: User) { 
   
    
    if (user.username == 'user' && user.password == 'user1') {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  
  }

  


  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}