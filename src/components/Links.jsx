import React from 'react';
import BtnLink from './BtnLink';

import '../sass/links.scss';
import { Link } from 'react-router-dom';

const links = [
  {
    title: 'Twitter Link',
    link: 'https://twitter.com/Ayobammy_',
    id: 'twitter-link',
  },
  {
    title: 'Zuri Team',
    link: 'https://training.zuri.team/',
    id: 'btn__zuri',
  },
  {
    title: 'Zuri Books',
    link: ' http://books.zuri.team',
    id: 'books',
  },
  {
    title: 'Python Books',
    link: 'https://books.zuri.team/python-for-beginners?ref_id=bammy',
    id: 'book__python',
  },
  {
    title: 'Background Check for Coders',
    link: 'https://background.zuri.team',
    id: 'pitch',
  },
  {
    title: 'Design Books',
    link: 'https://books.zuri.team/design-rules',
    id: 'book__design',
  },
];

const Links = () => {
  return (
    <section className="links">
      {links.map((item) => (
        <BtnLink item={item} key={item.id} />
      ))}
      <Link to="/contact" id="contact" className="link">
        Contact Me
      </Link>
    </section>
  );
};

export default Links;
