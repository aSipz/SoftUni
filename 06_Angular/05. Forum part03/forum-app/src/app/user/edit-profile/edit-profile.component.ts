import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { emailDomains } from 'src/app/shared/constants'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['../profile/profile.component.css']
})
export class EditProfileComponent {

  emailDomains = emailDomains;

  @ViewChild('form') form!: NgForm;

  // get user() {
  //   return this.userService.user;
  // }

  get user() {
    const { username, email, tel: telephone } = this.userService.user!
    const [telCode, ...tel] = telephone.split(' ');
    return {
      username,
      email,
      telCode,
      tel: tel.join(' ')
    }
  }

  constructor(private userService: UserService, private router: Router) { }

  handleProfileEdit(): void {

    if (this.form.invalid) {
      return;
    }

    const { telCode, ...newUserValues } = this.form.value;
    newUserValues.tel = telCode + ' ' + newUserValues.tel;

    this.userService.user = { ...this.userService.user, ...newUserValues };

    console.log(this.form.value);

    this.router.navigate(['/user/profile']);
  }
}
