import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginForm') loginForm!: NgForm;

  handleSubmit(form: NgForm): void {
    console.log(form.value);
  }

  handleReset(): void {
    this.loginForm.resetForm();
  }
}
