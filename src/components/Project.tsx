import * as React from 'react';
import { motion } from 'framer-motion';

interface Props {
  img?: string;
  title: string;
  release: string;
  description: any;
  href: string;
}

export default class Project extends React.Component<Props> {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener nofollow">
        <motion.div
          className="card"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 260, damping: 10 }}
        >
          <div className="card-header">
            {this.props.img !== undefined ? (
              <figure className="image">
                <img src={this.props.img} alt={this.props.title} />
              </figure>
            ) : null}
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <small className="has-text-grey has-text-weight-normal">
                  {this.props.release}
                </small>
                <p>
                  <strong className="title is-5">{this.props.title}</strong>
                </p>
                <p>{this.props.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </a>
    );
  }
}
