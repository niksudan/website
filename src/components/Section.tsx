import * as React from 'react';

interface Props {
  children: any;
}

export default class Section extends React.Component<Props> {
  render() {
    return (
      <section className="section">
        <div className="container">{this.props.children}</div>
      </section>
    );
  }
}
