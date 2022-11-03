import React from 'react';
import { Input, Textarea } from '../components';
import '../sass/contact.scss';

const Contact = () => {
  return (
    <div className="container contact">
      <div className="content">
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>

        <form>
          <Input
            id="first_name"
            label="First name"
            name="first_name"
            placeholder="Enter your first name"
            type="text"
          />
          <Input
            id="last_name"
            label="Last name"
            name="last_name"
            placeholder="Enter your last name"
            type="text"
          />
          <Input
            id="email"
            label="Email"
            name="email"
            placeholder="yourname@gmail.com"
            type="email"
          />
          <Textarea
            id="message"
            label="Message"
            name="message"
            placeholder={`Send me a message and i'll reply as soon as possible`}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
