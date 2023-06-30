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

    const { email, password } = this.loginForm.value

    this.userService.login(email, password).subscribe({
      next: () => {
        const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigate([returnUrl]);
      },
      error: err => console.log(err)
    });

  }

}
