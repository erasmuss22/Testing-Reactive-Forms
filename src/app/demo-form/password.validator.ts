import { AbstractControl, ValidatorFn } from '@angular/forms';

export function confirmPasswordValidator(passwordControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const password = passwordControl.value;
        return control.value === password ? null : {'passwordMismatch': { value: control.value }};
    };
}
