import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  get isLoggedIn() {
    return this.userService.isLoggedIn;
  }

  constructor(private userService: UserService) { }

}
