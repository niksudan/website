import * as React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-tilt';

interface Props {
  img?: string;
  title: string;
  release: string;
  description: any;
  href: string;
  tags: string[];
}

const placeholders = [
  require('../assets/placeholder1.gif'),
  require('../assets/placeholder2.webp'),
  require('../assets/placeholder3.gif'),
  require('../assets/placeholder4.gif'),
  require('../assets/placeholder5.gif'),
];

export default class Project extends React.Component<Props> {
  placeholder: string;

  constructor(props) {
    super(props);
    this.placeholder =
      placeholders[Math.floor(Math.random() * placeholders.length)];
  }

  render() {
    return (
      <a
        className="project"
        href={this.props.href}
        target="_blank"
        rel="noopener nofollow"
      >
        <Tilt className="project-inner" scale={1}>
          <motion.div
            className="card"
            initial={{
              perspective: 1,
              translateX: 0,
              translateY: 0,
              translateZ: 0,
            }}
            whileHover={{
              scale: 1.0625,
            }}
          >
            <div className="card-header">
              <figure
                className="image is-4by3"
                style={{
                  backgroundImage: `url('${
                    this.props.img !== undefined
                      ? this.props.img
                      : this.placeholder
                  }')`,
                }}
              >
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
        </Tilt>
      </a>
    );
  }
}
