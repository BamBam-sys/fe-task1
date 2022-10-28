import React from 'react';
import { ReactComponent as Zuri } from '../assets/zuri.svg';
import { ReactComponent as Ingressive } from '../assets/i4g.svg';

const Footer = () => {
  return (
    <div className="footer">
      <Zuri />
      <p>HNG Internship 9 Frontend Task</p>
      <Ingressive />
    </div>
  );
};

export default Footer;
