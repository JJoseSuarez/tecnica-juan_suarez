import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PATTERNS } from '../utils/validators_pattern';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  // Control vars
  lockPassword: boolean = true;
  buttonLoginBoolean: boolean = false;
  typeTextPassword: string = 'password';

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(PATTERNS.PATTERN_EMAIL)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      reminder: new FormControl(false)
    });
  }

  showInputPassword(unlock: boolean) {
   if (unlock && this.lockPassword === true) {
     this.lockPassword = false;
     this.typeTextPassword = 'text';
   } else {
     this.lockPassword = true;
     this.typeTextPassword = 'password';
   }
  }
  buttonAction(submitForm: string) {
    this.buttonLoginBoolean = true;
    if (this.loginForm.status !== 'INVALID') {
      console.log(submitForm);
    }
  }
}
