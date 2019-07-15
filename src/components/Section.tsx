import * as React from 'react';

interface Props {
  children: any;
  className?: string;
  id?: string;
}

export default class Section extends React.Component<Props> {
  static defaultProps = {
    className: '',
    id: '',
  };

  render() {
    return (
      <section id={this.props.id} className={`section ${this.props.className}`}>
        <div className="container">{this.props.children}</div>
      </section>
    );
  }
}
