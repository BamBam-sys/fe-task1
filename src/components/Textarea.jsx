import React from 'react';

const Textarea = ({ name, label, id, placeholder }) => {
  return (
    <div>
      <label htmlFor={name}>
        <div className="">{label}</div>
      </label>
      <textarea
        className=""
        name={name}
        id={id}
        // onChange={onChange}
        // value={value}
        placeholder={placeholder}
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default Textarea;
