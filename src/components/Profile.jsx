import React from 'react';
import avatar from '../assets/avatar.jpg';
import share from '../assets/share.png';
import share_mobile from '../assets/share_mobile.png';

const Profile = () => {
  return (
    <>
      <section className="profile-section">
        <img id="profile__img" src={avatar} alt="profile img" />
        <p id="twitter">@Ayobammy_</p>
        <p id="slack">Ayobami Lawal</p>

        <div className="share-btn">
          <img src={share} alt="share button" />
        </div>

        <div className="share-btn_mobile">
          <img src={share_mobile} alt="share button" />
        </div>
      </section>
    </>
  );
};

export default Profile;
