import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  get user() {
    const { username, email, tel } = this.userService.user!;
    return {
      username,
      email,
      tel
    }
  }

  constructor(private router: Router, private userService: UserService) { }

  handleEditClick() {
    this.router.navigate(['/user/profile/edit']);
  }
}
