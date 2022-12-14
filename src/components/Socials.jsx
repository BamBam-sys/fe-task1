import React from 'react';
import github from '../assets/github.png';
import { ReactComponent as Slack } from '../assets/slack.svg';

import '../sass/socials.scss';

const Socials = () => {
  return (
    <section className="socials">
      <img src={github} alt="github icon" />
      <Slack />
    </section>
  );
};

export default Socials;
