import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false); 

  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }
  
  login(email: string, password: string): boolean {
    if (email === 'test' && password === 'test') {
      this.loggedIn.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn.next(false);
  }
}
