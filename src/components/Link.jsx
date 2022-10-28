import React from 'react';

const Link = ({ item: { link, title, id } }) => {
  return (
    <div>
      <a
        href={link}
        id={id}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </div>
  );
};

export default Link;
