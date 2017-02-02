import React from 'react';
import './styles/Infobox.css';

const Infobox = ({ children }) => {
  const avatarUrl = 'http://www.gravatar.com/avatar/88b83f86433e9aff6e3a1d25735384a6?s=500';
  return (
    <div className="infobox">
      <div className="infobox__name">
        <h2>Nik Sudan</h2>
        <p>Web Developer, Game Developer, Musician</p>
      </div>
      <div className="infobox__avatar">
        <img src={avatarUrl} alt="Avatar" />
      </div>
    </div>
  );
};

export default Infobox;
