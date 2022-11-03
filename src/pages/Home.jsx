import React from 'react';
import { Footer, Links, Profile, Socials } from '../components';

import '../sass/home.scss';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <Profile />
          <Links />
          <Socials />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
