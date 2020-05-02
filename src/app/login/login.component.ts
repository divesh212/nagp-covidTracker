import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { IAdmin } from '../interfaces/IAdmin';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  notapproved: string;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private toastrService: ToastrService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('TOKEN')) {
      localStorage.clear();
    }
  }

  onSubmit(admin: IAdmin) {
    if (this.loginService.validateAdmin(admin)) {
      localStorage.setItem('TOKEN', 'token');
      localStorage.setItem('username', admin.username);
      this.loginService.isLoggedIn(true);
      this.toastrService.success('Admin logged in successfully!', 'COVID-19 Tracker');
      console.log("logged in")
    } else {
      console.log("incorrect username or password");
      this.toastrService.error('Incorrect username or password!');
      this.notapproved = "Incorrect username or password!";
    }
  }

}
