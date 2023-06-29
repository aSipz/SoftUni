import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-theme',
  templateUrl: './create-theme.component.html',
  styleUrls: ['./create-theme.component.css']
})
export class CreateThemeComponent {

  @ViewChild('form') form!: NgForm;

  constructor() { }

  handleSubmit(): void {

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);

  }
}
