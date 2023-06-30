import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITheme, IUser } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-theme-detail',
  templateUrl: './theme-detail.component.html',
  styleUrls: ['./theme-detail.component.css']
})
export class ThemeDetailComponent {

  theme: ITheme;

  get isLoggedIn() {
    return this.userService.isLoggedIn;
  }

  get user() {
    return this.userService.user;
  }

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.theme = this.activatedRoute.snapshot.data['theme'];
  }

  newPost(updatedTheme: ITheme) {
    this.theme = updatedTheme;
  }
}
