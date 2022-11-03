import React from 'react';
import '../sass/link.scss';

const Link = ({ item: { link, title, id } }) => {
  return (
    <a
      href={link}
      id={id}
      className="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
};

export default Link;
