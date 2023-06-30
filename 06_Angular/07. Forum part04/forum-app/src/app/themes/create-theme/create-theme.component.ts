import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create-theme',
  templateUrl: './create-theme.component.html',
  styleUrls: ['./create-theme.component.css']
})
export class CreateThemeComponent {

  @ViewChild('form') form!: NgForm;

  constructor(private apiService: ApiService, private router: Router) { }

  handleSubmit(): void {

    if (this.form.invalid) {
      return;
    }

    const { themeName, postText } = this.form.value;

    this.apiService.postNewTheme(themeName, postText).subscribe({
      next: () => this.router.navigate(['/themes']),
      error: (err) => {
        console.log(err)
      }
    });

  }
}
