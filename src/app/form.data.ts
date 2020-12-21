export const PLACEHOLDERS = {
  login: 'Enter your login',
  password: 'Enter your password',
  email: 'email@smth.smth',
  age: 'Your age',
  role: 'Choose your role:'
};

export const FORM_SUCCESS = {
  login: 'Accepted!',
  password: 'Accepted!',
  email: 'Accepted!',
  age: 'Accepted!',
  role: 'Accepted!'
};

export const FORM_ERRORS = {
  login: '',
  password: '',
  email: '',
  age: '',
  role: ''
};

export const VALIDATION_MESSAGES = {
  login: {
    required: 'Login is required.',
    minlength: 'Login must be at least 5 characters.',
    maxlength: 'Login must be no more then 15 characters.'
  },
  password: {
    required: 'Password is required.',
    minlength: 'Password must be at least 8 characters.',
    maxlength: 'Login must be no more then 25 characters.'
  },
  email: {
    required: 'Email is required.',
    emailValidator: 'Invalid Email.'
  },
  age: {
    required: 'Age is required.',
    rangeValidator: 'Value must be in the range 1...122.'
  },
  role: {
    required: 'Role is required.'
  }
};

export const ROLES = ['Guest', 'Moderator', 'Administrator'];

