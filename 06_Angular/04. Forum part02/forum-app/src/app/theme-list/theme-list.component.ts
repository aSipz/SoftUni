import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ITheme } from '../interfaces/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent {

  themes: ITheme[] | null = null;
  errorFetchingData = false;

  constructor(private apiService: ApiService) {
    apiService.getThemes().subscribe({
      next: value => this.themes = value,
      error: err => {
        this.errorFetchingData = true;
        console.log(err);
      }
    });

  }
}
