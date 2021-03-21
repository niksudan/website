import * as React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
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
              <div className="column is-5">
                <motion.h1
                  className="title is-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Interfaces, Games, Software &amp; Sounds
                </motion.h1>
                <motion.p
                  className="subtitle is-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Welcome to the website of Nik Sudan
                </motion.p>
                <div className="buttons">
                  <motion.a
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { delay: 0.6 } }}
                    whileHover={{ scale: 1.25 }}
                    className="button is-primary is-inverted is-outlined is-medium"
                    href="https://twitter.com/niksudan"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    <Icon iconName="twitter" iconPack="fab" />
                  </motion.a>
                  <motion.a
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { delay: 0.7 } }}
                    whileHover={{ scale: 1.25 }}
                    className="button is-primary is-inverted is-outlined is-medium"
                    href="https://soundcloud.com/niksudan"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    <Icon iconName="music" />
                  </motion.a>
                  <motion.a
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { delay: 0.8 } }}
                    whileHover={{ scale: 1.25, originX: 0 }}
                    className="button is-primary is-inverted is-outlined is-medium"
                    href="https://upscri.be/81a958/"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    <span>Sign me up</span>
                    <Icon iconName="arrow-right" />
                  </motion.a>
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
              canHover
            />
          </Link>
        </div>
      </section>
    );
  }
}
