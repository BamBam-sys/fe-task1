import React from 'react';
import { Button, Checkbox, Input, Textarea } from '../components';
import '../sass/contact.scss';

const Contact = () => {
  return (
    <div className="container contact">
      <div className="content">
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>

        <form>
          <div className="first-name">
            <Input
              id="first_name"
              label="First name"
              name="first_name"
              placeholder="Enter your first name"
              type="text"
            />
          </div>
          <div className="last-name">
            <Input
              id="last_name"
              label="Last name"
              name="last_name"
              placeholder="Enter your last name"
              type="text"
            />
          </div>
          <div className="email">
            <Input
              id="email"
              label="Email"
              name="email"
              placeholder="yourname@gmail.com"
              type="email"
            />
          </div>
          <div className="textarea">
            <Textarea
              id="message"
              label="Message"
              name="message"
              placeholder={`Send me a message and i'll reply as soon as possible`}
            />
          </div>
          <div className="check">
            <Checkbox id="check" />
          </div>
          <div className="btn">
            <Button />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
