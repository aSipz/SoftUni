import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appCustomValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomValidatorDirective,
      multi: true
    }
  ]
})
export class CustomValidatorDirective implements Validator {

  @Input() appCustomValidator: number | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.appCustomValidator === undefined || (control.value?.length || 0) <= this.appCustomValidator) {
      return null;
    }
    return {
      appCustomValidator: this.appCustomValidator
    }
  }

  // registerOnValidatorChange(fn: () => void): void {

  // }

  constructor() { }

}
