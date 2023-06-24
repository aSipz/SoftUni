import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

const myValidator: ValidatorFn = (control: AbstractControl) => {
  return control.value.length > 10 ? { myValidator: true } : null;
}

function createMyValidator(config: number): ValidatorFn {
  return (control: AbstractControl) => {
    return control.value.length > config ? { myValidator: true } : null;
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })

  constructor(private fb: FormBuilder) {

  }

  handleSubmit() {

  }

  handleReset() {
    this.registerForm.reset();
  }
}
