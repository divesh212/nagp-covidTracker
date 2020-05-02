import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  title: string = "COVID-19 Tracker";
  loggedIn: boolean = false;

  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.loggedIn.subscribe(login => {
      this.loggedIn = login;
    })
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['/dashboard']);
  }

}
