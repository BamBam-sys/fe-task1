import React from 'react';
import '../sass/textarea.scss';
import ErrorMessage from './ErrorMessage';

const Textarea = ({
  name,
  label,
  id,
  placeholder,
  value,
  handleInputChange,
  error,
}) => {
  const errorStyles = error ? 'error' : '';

  return (
    <div className="textarea">
      <label htmlFor={name}>
        <div className="">{label}</div>
      </label>
      <textarea
        className={errorStyles}
        name={name}
        id={id}
        onChange={handleInputChange}
        value={value}
        placeholder={placeholder}
        cols="30"
        rows="10"
      ></textarea>
      {error ? <ErrorMessage message={error} /> : null}
    </div>
  );
};

export default Textarea;
