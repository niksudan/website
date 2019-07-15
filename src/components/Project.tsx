import * as React from 'react';

interface Props {
  img?: string;
  title: string;
  release: string;
  description: any;
  href: string;
}

export default class Project extends React.Component<Props> {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener nofollow">
        <div className="card">
          <div className="card-header">
            {this.props.img !== undefined ? <img src={this.props.img} /> : null}
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <small className="has-text-grey has-text-weight-normal">
                  {this.props.release}
                </small>
                <p>
                  <strong className="title is-5">{this.props.title}</strong>
                </p>
                <p>{this.props.description}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}
