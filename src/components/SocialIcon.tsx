import * as React from 'react';
import { Tooltip } from 'react-tippy';
import Icon from './Icon';

interface Props {
  title: string;
  href: string;
  iconName: string;
  iconPack?: string;
  className?: string;
}

export default class SocialIcon extends React.Component<Props> {
  static defaultProps = {
    iconPack: 'fab',
    className: '',
  };

  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener nofollow">
        <Tooltip title={this.props.title} position="bottom">
          <Icon
            iconPack={`${this.props.iconPack} fa-2x`}
            iconName={this.props.iconName}
            className={`is-large ${this.props.className}`}
            canHover
          />
        </Tooltip>
      </a>
    );
  }
}
