import * as React from 'react';

interface Props {
  children: any;
  index?: number;
}

export default class Box extends React.Component<Props> {
  static defaultProps = {
    index: 0,
  };

  render() {
    return (
      <div
        className="box"
        style={{ animationDelay: `${this.props.index * 0.2}s` }}>
        {this.props.children}
      </div>
    );
  }
}
