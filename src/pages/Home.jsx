import React from 'react';
import { Footer, Links, Profile, Socials } from '../components';

const Home = () => {
  return (
    <>
      <div className="container">
        <Profile />
        <Links />
        <Socials />
      </div>
      <Footer />
    </>
  );
};

export default Home;
