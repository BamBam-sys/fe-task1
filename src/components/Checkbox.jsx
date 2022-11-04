import React from 'react';
import '../sass/checkbox.scss';

const Checkbox = (id) => {
  return (
    <div className="checkbox">
      <input type="checkbox" id={id} name={id} />
      <label for={id}>
        You agree to providing your data to Ayobami who may contact you.
      </label>
    </div>
  );
};

export default Checkbox;
