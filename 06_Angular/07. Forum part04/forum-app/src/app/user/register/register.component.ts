import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { emailDomains } from 'src/app/shared/constants';
import { appEmailValidator, sameValueGroupValidator } from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  regForm = this.fb.group({
    email: ['', [Validators.required, appEmailValidator(emailDomains)]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    telCode: ['00359'],
    tel: [],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: []
    }, {
      validator: [sameValueGroupValidator('password', 'rePassword')]
    })
  });

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  registerHandler(): void {

    if (this.regForm.invalid) {
      return;
    }

    const { username, email, pass: { password, rePassword } = {} } = this.regForm.value;
    const tel = (this.regForm.value.tel && this.regForm.value.telCode)
      ? this.regForm.value.telCode + ' ' + this.regForm.value.tel
      : '';

    this.userService.register(username!, email!, password, rePassword, tel).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: err => console.log(err)
    });

  }
}
