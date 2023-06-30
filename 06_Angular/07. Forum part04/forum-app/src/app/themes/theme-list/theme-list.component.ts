import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ITheme } from '../../shared/interfaces';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent {

  themes: ITheme[] | null = null;
  errorFetchingData = false;

  get isLoggedIn() {
    return this.userService.isLoggedIn;
  }

  get userId() {
    return this.userService.user?._id;
  }

  constructor(
    private apiService: ApiService,
    private userService: UserService
  ) {
    this.apiService.getThemes().subscribe({
      next: value => this.themes = value,
      error: err => {
        this.errorFetchingData = true;
        console.log(err);
      }
    });

  }

  handleSubscribe(themeId: string) {
    this.apiService.themeSubscribe(themeId).subscribe({
      next: () => this.themes?.find(t => t._id === themeId)?.subscribers.push(this.userId!),
      error: err => console.log(err)
    });
  }
}
