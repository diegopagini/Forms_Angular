import { AbstractControl, ValidatorFn } from '@angular/forms';

export class MyValidators {
  // static matchPasswords: any | ValidatorFn | ValidatorFn[];

  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log(value);
    if (value > 10000) {
      return {price_invalid: true};
    }
    return null;
  }

  static validPaswword(control: AbstractControl) {
    const value = control.value;
    if (!containsNumber(value)) {
      return { invalid_paswoord: true };
    }
    return null;
  }

  static matchPasswords(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPaswword = control.get('confirmPassword').value;
    if (password == confirmPaswword) {
      return null;
    } 
    return {match_password: true}
  }
}

function isNumber(value: string) {
  return !isNaN(parseInt(value, 10));
}

function containsNumber(value: string) {
  return value.split('').find(v => isNumber(v)) !== undefined
}