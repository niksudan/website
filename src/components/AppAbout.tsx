import * as React from 'react';
import SocialIcon from './SocialIcon';

export default class AppAbout extends React.Component {
  render() {
    return (
      <section className="section" id="about">
        <div className="container">
          <h2 className="title is-3 has-text-white">Who?</h2>
          <div className="columns">
            <div className="column is-4">
              <div className="box">
                <div className="content">
                  <h3>Musician</h3>
                  <p>
                    London based composer, music producer and performer of
                    soundscape/electronica works. Also produces works for games
                    and film.
                  </p>
                </div>
                <SocialIcon
                  title="Listen on SoundCloud"
                  iconName="soundcloud"
                  href="https://soundcloud.com/niksudan"
                />
                <SocialIcon
                  title="Listen on Bandcamp"
                  iconName="bandcamp"
                  href="https://niksudan.bandcamp.com"
                />
                <SocialIcon
                  title="Listen on Spotify"
                  iconName="spotify"
                  href="https://open.spotify.com/artist/4zQ53leKAM0j0hyRuSP5lD"
                />
                <SocialIcon
                  title="Listen on Apple Music"
                  iconName="apple"
                  href="https://music.apple.com/us/artist/nik-sudan/1442298371"
                />
                <SocialIcon
                  title="Like on Facebook"
                  iconName="facebook"
                  href="https://facebook.com/niksudanmusic"
                />
              </div>
            </div>
            <div className="column is-4">
              <div className="box">
                <div className="content">
                  <h3>Developer</h3>
                  <p>
                    Full stack web developer and software architect for systems,
                    with a thing for interfaces and UI. Experienced in React,
                    TypeScript and Node.js.
                  </p>
                </div>
                <SocialIcon
                  title="Open Source"
                  iconName="github"
                  href="https://github.com/niksudan"
                />
                <SocialIcon
                  title="Read Blog"
                  iconName="medium"
                  href="https://medium.com/@niksudan"
                />
                <SocialIcon
                  title="Check Legitimacy"
                  iconName="linkedin"
                  href="https://linkedin.com/in/niksudan"
                />
              </div>
            </div>
            <div className="column is-4">
              <div className="box">
                <div className="content">
                  <h3>Game Designer</h3>
                  <p>
                    Independent game developer and designer creating weird and
                    wonderful games, with the occasional excremental experience.
                    GameMaker nut.
                  </p>
                </div>
                <SocialIcon
                  title="Play on Game Jolt"
                  iconName="bolt"
                  iconPack="fas fa-2x"
                  href="https://gamejolt.com/@nik"
                />
                <SocialIcon
                  title="Play on itch.io"
                  iconName="itch-io"
                  href="https://nik.itch.io"
                />
                <SocialIcon
                  title="Watch Gameplay"
                  iconName="youtube"
                  href="https://youtube.com/c/niksudan"
                />
                <SocialIcon
                  title="Development Livestreams"
                  iconName="twitch"
                  href="https://twitch.tv/niksudan"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
