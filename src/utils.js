function isEmailValid(email) {
  const emailRegexp = new RegExp(
    // eslint-disable-next-line
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  );

  return emailRegexp.test(email);
}

export const validate = (inputs) => {
  const errors = {};

  const { firstName, lastName, email, message } = inputs;

  if (firstName.trim() === '')
    errors.firstName = `please enter your first name`;

  if (lastName.trim() === '') errors.lastName = `please enter your last name`;

  if (!isEmailValid(email)) {
    errors.email = `plese enter a valid email address`;
  }

  if (message.trim() === '') errors.message = `please enter a message`;

  return Object.keys(errors).length === 0 ? null : errors;
};
