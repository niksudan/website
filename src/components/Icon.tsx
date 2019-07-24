import * as React from 'react';
import { motion } from 'framer-motion';

interface Props {
  iconName: string;
  iconPack?: string;
  className?: string;
  canHover?: boolean;
}

export default class Icon extends React.Component<Props> {
  static defaultProps = {
    iconPack: 'fas',
    className: '',
    canHover: false,
  };

  render() {
    return (
      <motion.span
        className={`icon ${this.props.className}`}
        whileHover={this.props.canHover ? { scale: 1.5 } : {}}
        transition={{ type: 'spring', stiffness: 260, damping: 10 }}
      >
        <i className={`${this.props.iconPack} fa-${this.props.iconName}`} />
      </motion.span>
    );
  }
}
