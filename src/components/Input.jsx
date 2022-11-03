import React from 'react';
import '../sass/input.scss';

const Input = ({ name, label, id, type, placeholder }) => {
  return (
    <div className="input">
      <label htmlFor={name}>
        <div className="">{label}</div>
      </label>
      <input
        className=""
        name={name}
        id={id}
        type={type}
        // onChange={onChange}
        // value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
