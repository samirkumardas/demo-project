export const ERROR_COLOR = '#9f3a38'

export const FORM = {
  INPUT_WRAP: {
    borderWidth: 1,
    borderRadius: 2,
    paddingLeft: 5
  },
  ERROR_STYLE: {
    marginTop: 5,
    color: ERROR_COLOR,
    fontSize: 13
  },
  TEXTINPUT_STYLE: {
    height: 35,
    width: 230,
    padding: 5,
    fontSize: 14
  }
}

export const SIGNIN_FORM = {
  name: 'signin',
  submitText: 'Log in',
  fields: [
    {
      name: 'email',
      keyboardType: 'email-address',
      placeholder: 'Email *',
      autoCapitalize: 'none'
    },
    { name: 'password',
      secureTextEntry: true,
      placeholder: 'Password *',
      autoCapitalize: 'none'
    }
  ],
  validate: values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Enter email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Enter a valid email'
    }
    if (!values.password) {
      errors.password = 'Enter password'
    }
    return errors
  }
}

export const REGISTER_FORM = {
  name: 'register',
  submitText: 'Register',
  fields: [
    {
      name: 'firstname',
      placeholder: 'First name *'
    },
    {
      name: 'lastname',
      placeholder: 'Last name *'
    },
    {
      name: 'email',
      keyboardType: 'email-address',
      placeholder: 'Email *',
      autoCapitalize: 'none'
    },
    {
      name: 'cEmail',
      keyboardType: 'email-address',
      placeholder: 'Confirm your email *',
      autoCapitalize: 'none'
    },
    {
      name: 'password',
      secureTextEntry: true,
      placeholder: 'Password *',
      autoCapitalize: 'none'
    },
    {
      name: 'cPassword',
      secureTextEntry: true,
      placeholder: 'Confirm password *',
      autoCapitalize: 'none'
    }
  ],
  validate: values => {
    const errors = {}
    if (!values.firstname) {
      errors.firstname = 'First name is required'
    }
    if (!values.lastname) {
      errors.lastname = 'Last name is required'
    }
    if (!values.email) {
      errors.email = 'Enter email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Enter a valid email'
    }
    if (values.email !== values.cEmail) {
      errors.cEmail = 'Confirm email does not match'
    }
    if (!values.password) {
      errors.password = 'Enter password'
    }
    if (values.password !== values.cPassword) {
      errors.cPassword = 'Confirm password does not match'
    }
    return errors
  }
}

export const SEND_TOKEN_FORM = {
  name: 'sendToken',
  submitText: 'Next',
  fields: [
    {
      name: 'email',
      keyboardType: 'email-address',
      placeholder: 'Email *',
      autoCapitalize: 'none'
    }
  ],
  validate: values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Enter email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Enter a valid email'
    }
    return errors
  }
}

export const RESET_PASS_FORM = {
  name: 'verifyToken',
  submitText: 'Submit',
  fields: [
    {
      name: 'token',
      placeholder: 'Token *',
      autoCapitalize: 'none'
    },
    {
      name: 'password',
      placeholder: 'Password *',
      secureTextEntry: true
    }
  ],
  validate: values => {
    const errors = {}
    if (!values.token) {
      errors.token = 'Token is required'
    }
    if (!values.password) {
      errors.password = 'Enter password'
    }
    return errors
  }
}

export const ACCOUNT_INFO_FORM = {
  name: 'accountInfo',
  submitText: 'Change Information',
  fields: [
    {
      name: 'name',
      placeholder: 'Name *'
    },
    {
      name: 'email',
      keyboardType: 'email-address',
      placeholder: 'Email *',
      autoCapitalize: 'none'
    },
    {
      name: 'phone',
      placeholder: 'Phone number *'
    },
    {
      name: 'city',
      placeholder: 'City'
    }
  ],
  validate: values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Name is required'
    }
    if (!values.email) {
      errors.email = 'Enter email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Enter a valid email'
    }
    if (!values.phone) {
      errors.phone = 'Enter phone'
    }
    return errors
  }
}

export const CHANGE_PASS_FORM = {
  name: 'changePass',
  submitText: 'Submit',
  fields: [
    {
      name: 'password',
      secureTextEntry: true,
      placeholder: 'Old password *',
      autoCapitalize: 'none'
    },
    {
      name: 'newPassword',
      secureTextEntry: true,
      placeholder: 'New password *',
      autoCapitalize: 'none'
    },
    {
      name: 'cNewPassword',
      secureTextEntry: true,
      placeholder: 'Confirm new password *',
      autoCapitalize: 'none'
    }
  ],
  validate: values => {
    const errors = {}
    if (!values.password) {
      errors.password = 'Enter old password'
    }
    if (!values.newPassword) {
      errors.newPassword = 'Enter new password'
    }
    if (values.newPassword !== values.cNewPassword) {
      errors.cNewPassword = 'Confirm new password does not match'
    }
    return errors
  }
}
