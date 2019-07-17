import * as React from 'react';

export default class AppLoader extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight is-dark">
        <div className="hero-body has-text-centered">
          <div style={{ width: '100%' }}>
            <div className="button is-loading is-text is-large is-fullwidth" />
            <small className="has-text-grey-light">
              Loading... something, I swear
            </small>
          </div>
        </div>
      </section>
    );
  }
}
