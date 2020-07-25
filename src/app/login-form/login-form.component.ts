import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  disabledBtn = 'Sign in button diabled';

  invalidEmail = 'Invalid Email, must have the form of foulen@domain';

  invalidPassword = 'Invalid Password, must have at least 6 characters';

  constructor() { }

  ngOnInit(): void {
  }

}
