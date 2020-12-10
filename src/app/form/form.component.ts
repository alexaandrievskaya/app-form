import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../user.class';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  loginForm: FormGroup; /*это форма отдельных элементов управления - группа FormControls*/

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

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('User name', [Validators.required, Validators.minLength(10)]),
      password: new FormControl('User password', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(form): void {
    console.log(form);
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
