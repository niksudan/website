import * as React from 'react';

interface Props {
  children: any;
}

export default class Box extends React.Component<Props> {
  render() {
    return <div className="box">{this.props.children}</div>;
  }
}
