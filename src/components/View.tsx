import * as React from 'react';
import Section from './Section';
import SocialIcon from './SocialIcon';
import Box from './Box';
import Icon from './Icon';

interface State {
  isLoaded: boolean;
}

export default class View extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <section className="hero is-fullheight is-dark">
          <div className="hero-body has-text-centered">
            <div style={{ width: '100%' }}>
              <div className="button is-loading is-text is-large is-fullwidth" />
              <small className="has-text-grey-light">
                Loading... something, I swear
              </small>
            </div>
          </div>
        </section>
      );
    }
    return (
      <>
        <section className="hero is-medium is-primary">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-8">
                  <h1 className="title is-2">
                    Interfaces, games, software architecture and sounds
                  </h1>
                  <p className="subtitle is-4">
                    Welcome to the website of Nik Sudan
                  </p>
                  <div className="buttons">
                    <a
                      className="button is-primary is-inverted is-outlined is-medium"
                      href="https://twitter.com/niksudan"
                      target="_blank"
                      rel="noopener nofollow">
                      <Icon iconName="twitter" iconPack="fab" />
                    </a>
                    <a
                      className="button is-primary is-inverted is-outlined is-medium"
                      href="https://soundcloud.com/niksudan"
                      target="_blank"
                      rel="noopener nofollow">
                      <Icon iconName="music" />
                    </a>
                    <a
                      className="button is-primary is-inverted is-outlined is-medium"
                      href="https://upscri.be/81a958/"
                      target="_blank"
                      rel="noopener nofollow">
                      <span>Subscribe</span>
                      <Icon iconName="arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Section>
          <div className="columns">
            <div className="column is-4">
              <Box>
                <div className="content">
                  <h2>Music</h2>
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
              </Box>
            </div>

            <div className="column is-4">
              <Box>
                <div className="content">
                  <h2>Development</h2>
                  <p>
                    Full stack web developer and software architect for systems.
                    Experienced in React, TypeScript and Node.js.
                  </p>
                </div>
                <SocialIcon
                  title="Open Source Projects"
                  iconName="github"
                  href="https://github.com/niksudan"
                />
                <SocialIcon
                  title="Read Blog"
                  iconName="medium"
                  href="https://medium.com/@niksudan"
                />
                <SocialIcon
                  title="Watch Livestreams"
                  iconName="twitch"
                  href="https://twitch.tv/niksudan"
                />
              </Box>
            </div>

            <div className="column is-4">
              <Box>
                <div className="content">
                  <h2>Games</h2>
                  <p>
                    Independent game developer creating weird and wonderful
                    games, with the occasional excremental experience.
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
              </Box>
            </div>
          </div>
        </Section>
      </>
    );
  }
}
