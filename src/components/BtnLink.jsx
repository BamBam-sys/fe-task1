import React from 'react';
import '../sass/btnLink.scss';

const BtnLink = ({ item: { link, title, id } }) => {
  return (
    <a
      href={link}
      id={id}
      className="btnLinkComponent"
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
};

export default BtnLink;
