import React, { useState } from 'react';
import { Button, Checkbox, Input, Textarea } from '../components';
import '../sass/contact.scss';
import { validate } from '../utils';

const Contact = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    check: false,
    errors: {},
  });

  // update form state with input value onchange
  const handleInputChange = (e) => {
    const { value, name } = e.target;

    // clear error for input onchange
    setFormState((prev) => ({
      ...prev,
      errors: { ...prev.errors, [name]: '' },
    }));

    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  // toggle checkbox boolean state
  const handleCheck = () => {
    setFormState((prev) => ({ ...prev, check: !prev.check }));
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // if check is false, abort submit
    if (!formState.check) return;

    // validate form input
    const errors = validate(formState);

    // if error, update formstate with error object, else error property will be empty
    setFormState((prev) => ({ ...prev, errors: errors || {} }));

    // if error abort submit
    if (errors) return;
  };

  return (
    <div className="container contact">
      <div className="content">
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>

        <form onSubmit={handleSubmit}>
          <div className="first-name">
            <Input
              id="first_name"
              label="First name"
              name="firstName"
              placeholder="Enter your first name"
              type="text"
              value={formState.firstName}
              handleInputChange={handleInputChange}
              error={formState.errors.firstName}
            />
          </div>
          <div className="lastName">
            <Input
              id="last_name"
              label="Last name"
              name="lastName"
              placeholder="Enter your last name"
              type="text"
              value={formState.lastName}
              handleInputChange={handleInputChange}
              error={formState.errors.lastName}
            />
          </div>
          <div className="email">
            <Input
              id="email"
              label="Email"
              name="email"
              placeholder="yourname@gmail.com"
              type="text"
              value={formState.email}
              handleInputChange={handleInputChange}
              error={formState.errors.email}
            />
          </div>
          <div className="textarea">
            <Textarea
              id="message"
              label="Message"
              name="message"
              placeholder={`Send me a message and i'll reply as soon as possible`}
              value={formState.message}
              handleInputChange={handleInputChange}
              error={formState.errors.message}
            />
          </div>
          <div className="check">
            <Checkbox id="check" handleCheck={handleCheck} />
          </div>
          <div className="btn">
            <Button check={formState.check} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
