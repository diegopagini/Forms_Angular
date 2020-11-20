import { AbstractControl, ValidatorFn } from '@angular/forms';
import { map } from 'rxjs/operators';
import { CategoriesService } from '../core/services/categories.service';

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
      return {match_password: true}
    } 
    return null;
  }
  static validateCategory(service: CategoriesService) {
    return (control: AbstractControl) => {
      const value = control.value;
      return service.checkCategory(value).pipe(
        map((response: any) => {
          const isAvailable = response.isAvailable;
          if (!isAvailable) {
          return {not_isAvailable: true}
          }
          return null
        })
      );
    }
  }
}

function isNumber(value: string) {
  return !isNaN(parseInt(value, 10));
}

function containsNumber(value: string) {
  return value.split('').find(v => isNumber(v)) !== undefined
}