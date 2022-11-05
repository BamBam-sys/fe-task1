import React from 'react';
import '../sass/button.scss';

const Button = ({ check }) => {
  return (
    <button className="submit-btn" disabled={!check}>
      Send message
    </button>
  );
};

export default Button;
