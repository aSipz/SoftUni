import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent {

  get isLoggedIn() {
    return this.userService.isLoggedIn;
  }

  constructor(private userService: UserService) { }
}
