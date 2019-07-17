import * as React from 'react';
import { motion } from 'framer-motion';

export default class AppFooter extends React.Component {
  render() {
    return (
      <section className="section has-text-centered has-text-grey">
        &copy; Nik Sudan {new Date().getFullYear()}
        <br />
        <small>
          By the way, the source code for this website is available{' '}
          <motion.a
            href="https://github.com/niksudan/website"
            target="_blank"
            rel="noopener nofollow"
            whileHover={{ color: 'white' }}
          >
            on GitHub
          </motion.a>
        </small>
      </section>
    );
  }
}
