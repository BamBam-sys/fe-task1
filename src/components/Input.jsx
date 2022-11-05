import React from 'react';
import '../sass/input.scss';
import ErrorMessage from './ErrorMessage';

const Input = ({
  name,
  label,
  id,
  type,
  placeholder,
  value,
  handleInputChange,
  error,
}) => {
  const errorStyles = error ? 'error' : '';

  return (
    <div className="input">
      <label htmlFor={name}>
        <div className="">{label}</div>
      </label>
      <input
        className={errorStyles}
        name={name}
        id={id}
        type={type}
        onChange={handleInputChange}
        value={value}
        placeholder={placeholder}
      />
      {error ? <ErrorMessage message={error} /> : null}
    </div>
  );
};

export default Input;
