import * as React from 'react';
import { Link } from 'react-scroll';
import Section from './Section';
import SocialIcon from './SocialIcon';
import Box from './Box';
import Icon from './Icon';
import Logo from './Logo';
import Project from './Project';

interface State {
  isLoaded: boolean;
}

export default class View extends React.Component<{}, State> {
  content?: any;

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  renderLoader() {
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

  renderHero() {
    return (
      <section className="hero is-fullheight is-primary">
        <div className="hero-body fade-in-up">
          <div className="container">
            <div className="columns is-vcentered is-centered">
              <div className="column is-4">
                <Logo />
              </div>
              <div className="column is-6">
                <h1 className="title is-2">
                  Interfaces, Games, Software Architecture &amp; Sounds
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
                    <span>I accept you into my life</span>
                    <Icon iconName="arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot has-text-centered">
          <Link smooth={true} duration={500} to="who">
            <Icon
              iconName="chevron-down fa-2x"
              className="has-text-white is-large"
            />
          </Link>
        </div>
      </section>
    );
  }

  renderAreas() {
    return (
      <Section id="who">
        <h2 className="title is-3 has-text-white">Who?</h2>
        <div className="columns">
          <div className="column is-4">
            <Box index={1}>
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
            </Box>
          </div>
          <div className="column is-4">
            <Box index={2}>
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
            </Box>
          </div>
          <div className="column is-4">
            <Box index={3}>
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
            </Box>
          </div>
        </div>
      </Section>
    );
  }

  renderProjects() {
    return (
      <Section id="what">
        <h2 className="title is-3 has-text-white">What?</h2>
        <p className="subtitle is-5 has-text-white">
          I make a lot of stuff, but here's just the cool bits:
        </p>
        <div className="columns is-multiline">
          <div className="column is-3">
            <Project
              img={require('../assets/diatris.png')}
              title="Diatris Soundtrack"
              release="July 2019"
              description="Soundtrack to Rob van Saaze's crazy addicting diagonal tetris game."
              href="https://soundcloud.com/niksudan/sets/diatris"
            />
          </div>
          <div className="column is-3">
            <Project
              img={require('../assets/captain-gastronaut.gif')}
              title="Captain Gastronaut"
              release="October 2018"
              description="Save your planet from extinction with your amazing fart powers! A ridiculous collaboration made in under 48 hours for the Jupiter Hadley Game Jam in London."
              href="https://gamejolt.com/games/captain-gastronaut/373463"
            />
          </div>
          <div className="column is-3">
            <Project
              img={require('../assets/absence.jpg')}
              title="Absence"
              release="April 2018"
              description="A collection of cinematic covers of Nine Inch Nails songs, originally written by Trent Reznor. A month in the making."
              href="https://soundcloud.com/niksudan/sets/absence"
            />
          </div>
          <div className="column is-3">
            <Project
              img={require('../assets/bgelf.jpg')}
              title="BGelF Toy Trouble"
              release="December 2017"
              description="Christmas-themed mobile game developed for the investment firm BGF. Designed, developed, and distributed in just 2 weeks."
              href="https://forge.uk/our-portfolio/bgelf"
            />
          </div>
          <div className="column is-3">
            <Project
              img={require('../assets/boozy-blundering.png')}
              title="Boozy Blundering"
              release="October 2017"
              description="You've only got one shot of alcohol in your system - will this be enough to convince four bar patrons that you're off your rockers, or will they see through your lack of intake and oust you?"
              href="https://gamejolt.com/games/boozy-blundering/290440"
            />
          </div>
          <div className="column is-3">
            <Project
              img={require('../assets/risk-ahoy.jpg')}
              title="Risk Ahoy!"
              release="September 2017"
              description="Mobile arcade game built in Unity made to raise awareness of risks at sea. Highly commended at the Safety at Sea Awards 2018."
              href="https://forge.uk/our-portfolio/risk-ahoy"
            />
          </div>
          <div className="column is-3">
            <Project
              img={require('../assets/butt.png')}
              title="butt"
              release="April 2017"
              description="Discord bot that farts at you."
              href="https://github.com/niksudan/butt"
            />
          </div>
          <div className="column is-3">
            <Project
              img={require('../assets/grimstorm.gif')}
              title="Grimstorm"
              release="April 2015"
              description="Intense, action-adventure set in a dark and grim world filled with knights and beasts. Made in user 2 weeks for a game jam, and featured in PC Gamer and Kotaku."
              href="https://nik.gamejolt.io/grimstorm"
            />
          </div>
          <div className="column is-3">
            <Project
              img={require('../assets/prettylight.png')}
              title="prettylight"
              release="February 2015"
              description="Powerful lighting engine for use with GameMaker: Studio. Open source & highly rated on the GameMaker Marketplace by other developers."
              href="https://github.com/niksudan/prettylight"
            />
          </div>
          <div className="column is-3">
            <Project
              title="Super Squat Simulator"
              release="2013"
              description="A simplistic and comedic “fitness simulator” that gained ridiculous momentum and eventually ended up going viral. Prominent streamers showcased it, essays were written about it, and several fan-games were produced."
              href="https://gamejolt.com/games/super-squat-simulator/11729"
            />
          </div>
        </div>
      </Section>
    );
  }

  render() {
    if (!this.state.isLoaded) {
      return this.renderLoader();
    }
    return (
      <>
        {this.renderHero()}
        {this.renderAreas()}
        {this.renderProjects()}
      </>
    );
  }
}
