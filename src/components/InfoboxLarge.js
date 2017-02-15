import React from 'react';
import Button from '../components/Button';
import './styles/InfoboxLarge.css';

const InfoboxLarge = ({ avatarUrl, handleClose, transition = 0 }) => {
  if (transition === 0) {
    return <div />;
  }
  const stretch = 1 - (0.75 * (1 - transition));
  return (
    <div className="infobox-large" style={{
      opacity: transition,
      transform: `scale(${stretch}, ${stretch})`,
    }}>
      <div className="infobox-large__wrapper">
        <div>
          <div className="infobox-large__avatar">
            <img src={avatarUrl} alt="Avatar" />
          </div>
          <div className="infobox-large__heading">
            <h1>Nik Sudan</h1>
            <p>Web Developer, Game Developer, Musician.</p>
          </div>
          <div className="infobox-large__content">
            <div>
              <h3>Social</h3>
              <ul>
                <li><a href="http://twitter.com/niksudan" target="_blank">Twitter</a></li>
                <li><a href="http://facebook.com/niksudan" target="_blank">Facebook</a></li>
                <li><a href="https://plus.google.com/+NikSudan/" target="_blank">Google Plus</a></li>
              </ul>
            </div>
            <div>
              <h3>Business</h3>
              <ul>
                <li><a href="http://linkedin.com/in/niksudan" target="_blank">Linkedin</a></li>
                <li><a href="http://angel.co/niksudan" target="_blank">AngelList</a></li>
              </ul>
            </div>
            <div>
              <h3>Video</h3>
              <ul>
                <li><a href="http://youtube.com/c/niksudan" target="_blank">YouTube</a></li>
                <li><a href="http://twitch.tv/niksudan" target="_blank">Twitch</a></li>
              </ul>
            </div>
            <div>
              <h3>Music</h3>
              <ul>
                <li><a href="http://soundcloud.com/niksudan" target="_blank">SoundCloud</a></li>
                <li><a href="http://niksudan.bandcamp.com" target="_blank">BandCamp</a></li>
                <li><a href="https://open.spotify.com/user/1164319488" target="_blank">Spotify</a></li>
                <li><a href="https://www.last.fm/user/niksudan" target="_blank">Last.fm</a></li>
              </ul>
            </div>
            <div>
              <h3>Projects</h3>
              <ul>
                <li><a href="http://github.com/niksudan" target="_blank">GitHub</a></li>
                <li><a href="http://gamejolt.com/@nik" target="_blank">Game Jolt</a></li>
                <li><a href="http://nik.itch.io/" target="_blank">itch.io</a></li>
              </ul>
            </div>
            <div>
              <h3>Content</h3>
              <ul>
                <li><a href="http://medium.com/@niksudan" target="_blank">Medium</a></li>
                <li><a href="http://500px.com/niksudan" target="_blank">500px</a></li>
              </ul>
            </div>
          </div>
          <p>
            <Button onClick={handleClose}>Close</Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoboxLarge;
