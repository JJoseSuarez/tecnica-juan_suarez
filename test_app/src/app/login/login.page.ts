import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  lockPassword: boolean = true;
  typeTextPassword: string = 'password';

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
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
    if (this.loginForm.status !== 'INVALID') {
      console.log(submitForm);
    }
  }
  
}
