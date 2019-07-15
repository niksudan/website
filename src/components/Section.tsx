import * as React from 'react';

interface Props {
  children: any;
  className?: string;
}

export default class Section extends React.Component<Props> {
  static defaultProps = {
    className: '',
  };

  render() {
    return (
      <section className={`section ${this.props.className}`}>
        <div className="container">{this.props.children}</div>
      </section>
    );
  }
}
