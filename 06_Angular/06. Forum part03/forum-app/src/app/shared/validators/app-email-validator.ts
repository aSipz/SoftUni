import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(domains: string[]): ValidatorFn {

    const domainString = domains.join('|');
    const pattern = new RegExp(`^[^@]{6,}@gmail\.(${domainString})$`);

    return (control) => {
        return (control.value === '' || pattern.test(control.value)) ? null : { appEmailValidator: true };
    }
};