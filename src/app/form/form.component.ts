import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../user.class';
import {AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {emailValidator, rangeValidator} from '../custom-validators';
import {FORM_ERRORS, FORM_SUCCESS, PLACEHOLDERS, ROLES, VALIDATION_MESSAGES} from '../form.data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm: FormGroup; /*это форма отдельных элементов управления - группа FormControls*/
  user: User = new User(1, null, null, null, null, null);
  roles: string[] = ROLES;
  formErrors = FORM_ERRORS;
  validationMessages = VALIDATION_MESSAGES;
  placeHolders = PLACEHOLDERS;
  formSuccess = FORM_SUCCESS;

  login: AbstractControl;
  password: AbstractControl;
  email: AbstractControl;
  age: AbstractControl;
  role: AbstractControl;

  // model: User = new User(1, '', '', null);
  // roles: string[] = ['Guest', 'Moderator', 'Administrator'];
  //
  // submitted = false;
  //
  // formErrors = {
  //   name: '',
  //   age: ''
  // };
  // validationMessages = {
  //   name: {
  //     required: 'Name is required.',
  //     minlength: 'Name must be at least 4 characters.'
  //   },
  //   age: {
  //     required: 'Age is required.'
  //   }
  // };
  //
  // @ViewChild('userForm') userForm: NgForm;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    this.createControls();

    // this.loginForm = new FormGroup({
    //   login: new FormControl('User name', [Validators.required, Validators.minLength(10)]),
    //   password: new FormControl('User password', [Validators.required, Validators.minLength(8)])
    // });
  }

  buildForm(): void {
    this.userForm = this.fb.group({
      login: [this.user.login, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      password: [this.user.password, [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      email: [this.user.email, [Validators.required, emailValidator]],
      age: [this.user.age, [Validators.required, rangeValidator(1, 122)]],
      role: [this.user.role, [Validators.required]],
    });

    this.userForm.valueChanges.subscribe((data) => this.onValueChanged());
  }

  onSubmit(): void {
    console.log(this.userForm.value);
  }

  createControls(): void {
    this.login = this.userForm.controls.login;
    this.password = this.userForm.controls.password;
    this.email = this.userForm.controls.email;
    this.age = this.userForm.controls.age;
    this.role = this.userForm.controls.role;
  }

  onValueChanged(): void {
    if (!this.userForm) {
      return;
    }

    const form = this.userForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';

      const control = form.get(field);

      if (control && control.dirty && control.invalid) {
        const message = this.validationMessages[field];

        for (const key in control.errors) {
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }
  }

  // ngAfterViewInit(): void {
  //   this.userForm.valueChanges.subscribe((data) => this.onValueChanged());
  // }
  //
  // onValueChanged(data?: any): void {
  //   if (!this.userForm) {
  //     return;
  //   }
  //
  //   const form = this.userForm.form;
  //   for (const field in this.formErrors) {
  //     this.formErrors[field] = '';
  //
  //     const control = form.get(field);
  //
  //     if (control && control.dirty && control.invalid) {
  //       const message = this.validationMessages[field];
  //
  //       for (const key in control.errors) {
  //         this.formErrors[field] += message[key];
  //       }
  //     }
  //   }
  // }

// get diagnostic(): string {
//   return JSON.stringify(this.model);
// }

// errorsLog(err): void {
//   console.log(err);
// }

  // onSubmit(): void {
  //   this.submitted = true;
  //   console.log('Form submitted');
  // }

}
