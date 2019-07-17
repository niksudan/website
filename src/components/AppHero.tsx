import * as React from 'react';
import { Link } from 'react-scroll';
import Logo from './Logo';
import Icon from './Icon';

export default class AppHero extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight is-primary is-bold fade-in">
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
                    rel="noopener nofollow"
                  >
                    <Icon iconName="twitter" iconPack="fab" />
                  </a>
                  <a
                    className="button is-primary is-inverted is-outlined is-medium"
                    href="https://soundcloud.com/niksudan"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    <Icon iconName="music" />
                  </a>
                  <a
                    className="button is-primary is-inverted is-outlined is-medium"
                    href="https://upscri.be/81a958/"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    <span>I accept you into my life</span>
                    <Icon iconName="arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot has-text-centered">
          <Link smooth={true} duration={500} to="about">
            <Icon
              iconName="chevron-down fa-2x"
              className="has-text-white is-large"
            />
          </Link>
        </div>
      </section>
    );
  }
}
