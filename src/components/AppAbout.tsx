import * as React from 'react';
import SocialIcon from './SocialIcon';

export default class AppAbout extends React.Component {
  render() {
    return (
      <section className="section" id="about">
        <div className="container">
          <h2 className="title is-3 has-text-white">Who am I?</h2>
          <p className="subtitle has-text-white">
            The name's <strong className="has-text-white">Nik Sudan</strong> -
            London based creator of things.
          </p>
          <div className="columns">
            <div className="column is-4">
              <div className="box">
                <div className="content">
                  <h3>Musician</h3>
                  <p>
                    Ambient multi-instrumentalist and music producer. Also
                    produces works for games and film. Experienced with sound
                    design.
                  </p>
                </div>
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
                  title="Listen on SoundCloud"
                  iconName="soundcloud"
                  href="https://soundcloud.com/niksudan"
                />
                <SocialIcon
                  title="Listen on Bandcamp"
                  iconName="bandcamp"
                  href="https://niksudan.bandcamp.com"
                />
              </div>
            </div>
            <div className="column is-4">
              <div className="box">
                <div className="content">
                  <h3>Software Engineer</h3>
                  <p>
                    Engineering lead with a thing for interfaces and user
                    experience. Experienced with React, React Native, TypeScript
                    and Node.js.
                  </p>
                </div>
                <SocialIcon
                  title="View open source projects"
                  iconName="github"
                  href="https://github.com/niksudan"
                />
                <SocialIcon
                  title="Read blog"
                  iconName="medium"
                  href="https://medium.com/@niksudan"
                />
                <SocialIcon
                  title="View professional experience"
                  iconName="linkedin"
                  href="https://linkedin.com/in/niksudan"
                />
              </div>
            </div>
            <div className="column is-4">
              <div className="box">
                <div className="content">
                  <h3>Game Creator</h3>
                  <p>
                    Independent game developer and designer creating weird
                    experiences. Big interest in gamification and engaging
                    interfaces.
                  </p>
                </div>
                <SocialIcon
                  title="Play games on Game Jolt"
                  iconName="bolt"
                  iconPack="fas fa-2x"
                  href="https://gamejolt.com/@nik"
                />
                <SocialIcon
                  title="Play games on itch.io"
                  iconName="itch-io"
                  href="https://nik.itch.io"
                />
                <SocialIcon
                  title="Watch videos of games"
                  iconName="youtube"
                  href="https://youtube.com/c/niksudan"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
