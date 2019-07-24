import * as React from 'react';
import { motion } from 'framer-motion';

interface Props {
  img?: string;
  title: string;
  release: string;
  description: any;
  href: string;
  tags: string[];
}

export default class Project extends React.Component<Props> {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener nofollow">
        <motion.div
          className="card"
          whileHover={{ scale: 1.15 }}
          transition={{ type: 'spring', stiffness: 260, damping: 10 }}
        >
          <div className="card-header">
            <figure className="image">
              <img
                src={
                  this.props.img !== undefined
                    ? this.props.img
                    : 'https://source.unsplash.com/random/640x480?nature'
                }
                alt={this.props.title}
              />
              <div className="tags is-right">
                {this.props.tags.map((tag, index) => (
                  <span
                    className={`tag ${index === 0 ? 'is-primary' : ''}`}
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </figure>
          </div>
          <div className="card-content">
            <small className="has-text-grey has-text-weight-normal">
              {this.props.release}
            </small>
            <p>
              <strong className="title is-5">{this.props.title}</strong>
            </p>
            <div className="content">
              <p>{this.props.description}</p>
            </div>
          </div>
        </motion.div>
      </a>
    );
  }
}
