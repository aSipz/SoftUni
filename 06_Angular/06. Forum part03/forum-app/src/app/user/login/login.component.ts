import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from '../user.service';
import { emailDomains } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailDomains = emailDomains;

  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  loginHandler(): void {

    if (this.loginForm.invalid) {
      return;
    }

    this.userService.user = {
      themes: [],
      posts: [],
      _id: '1',
      tel: '00359 883475039',
      email: this.loginForm.value['email'],
      username: 'gaga',
      password: this.loginForm.value['password'],
      created_at: '1',
      updatedAt: '1',
      __v: 0,
    };

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }

}
