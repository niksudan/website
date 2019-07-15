import * as React from 'react';

interface Props {
  iconName: string;
  iconPack?: string;
  className?: string;
}

export default class Icon extends React.Component<Props> {
  static defaultProps = {
    iconPack: 'fas',
    className: '',
  };

  render() {
    return (
      <span className={`icon ${this.props.className}`}>
        <i className={`${this.props.iconPack} fa-${this.props.iconName}`} />
      </span>
    );
  }
}
