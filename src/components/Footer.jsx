import React from 'react';
import { ReactComponent as Zuri } from '../assets/zuri.svg';
import i4g from '../assets/i4g.png';

const Footer = () => {
  return (
    <div className="footer">
      <Zuri />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={i4g} alt="i4g" />
    </div>
  );
};

export default Footer;
