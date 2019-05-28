import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from './model/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }

    const loginModel: Login = Object.assign({}, this.loginForm.value);
    console.log('loginData: ' + JSON.stringify(loginModel));
    this.router.navigate(['dashboard']);
  }

}
