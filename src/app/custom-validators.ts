import {AbstractControl, ValidatorFn, Validators} from '@angular/forms';

export function emailValidator(control: AbstractControl): { [key: string]: any } {
// pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')

  const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const value = control.value;

  const result = emailRegEx.test(value);

  if (result) {
    return null;
  }else{
    return {
      emailValidator: {value}
    };
  }
}

// Validators.pattern('^\\d+')
export function rangeValidator(minValue: number, maxValue: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = +control.value;

    if (isNaN(value)) {
      return { rangeValidator: {value} };
    }else if(value < minValue || value > maxValue) {
      return { rangeValidator: {value} };
    }else{
      return null;
    }

  };
}
