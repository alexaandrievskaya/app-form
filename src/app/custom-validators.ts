import {AbstractControl} from '@angular/forms';

export function emailValidator(control: AbstractControl): any {
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
