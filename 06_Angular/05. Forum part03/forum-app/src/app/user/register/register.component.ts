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

    this.userService.user = {
      themes: [],
      posts: [],
      _id: '1',
      tel: `${(this.regForm.value.telCode || '')} ` + (this.regForm.value.tel || ''),
      email: this.regForm.value.email || '',
      username: this.regForm.value.username || '',
      password: this.regForm.value.pass.password || '',
      created_at: '1',
      updatedAt: '1',
      __v: 0,
    };

    this.router.navigate(['/']);
  }
}
