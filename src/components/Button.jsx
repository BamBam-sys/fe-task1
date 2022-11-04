import React from 'react';
import '../sass/button.scss';

const Button = () => {
  return (
    <button
      className="submit-btn"
      type="submit"
      onClick={(e) => e.preventDefault()}
    >
      Send message
    </button>
  );
};

export default Button;
