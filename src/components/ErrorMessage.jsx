import React from 'react';
import '../sass/errorMessage.scss';

const ErrorMessage = ({ message }) => {
  return <div className="errorMessageComponent">{message}</div>;
};

export default ErrorMessage;
