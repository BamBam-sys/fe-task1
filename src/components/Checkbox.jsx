import React from 'react';
import '../sass/checkbox.scss';

const Checkbox = ({ id, handleCheck }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" id={id} onClick={handleCheck} />
      <label htmlFor={id}>
        You agree to providing your data to Ayobami who may contact you.
      </label>
    </div>
  );
};

export default Checkbox;
