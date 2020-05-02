import { Injectable } from '@angular/core';
import { IAdmin } from '../interfaces/IAdmin';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private adminData: IAdmin[];
  loggedIn = new Subject<boolean>()

  constructor(private router: Router) {
    this.getAdmin();
  }

  isLoggedIn(adminLoggedIn: boolean) {
    this.loggedIn.next(adminLoggedIn);
  }


  getAdmin(): IAdmin[] {
    this.adminData = [{
      "id": 1,
      "username": "admin1",
      "password": "admin1"
    }, {
      "id": 2,
      "username": "admin2",
      "password": "admin2"
    }];
    return this.adminData;
  }

  validateAdmin(admin: IAdmin): boolean {
    let isAdmin = false;
    if (this.adminData.findIndex(user => admin.username === user.username && admin.password === user.password) > -1) {
      isAdmin = true;
      this.router.navigate(['/dashboard']);
    }
    return isAdmin;
  }
}
