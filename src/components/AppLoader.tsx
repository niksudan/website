import * as React from 'react';
import Loader from './Loader';

export default class AppLoader extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight is-dark">
        <div className="hero-body has-text-centered">
          <div style={{ width: '100%' }}>
            <Loader />
            <small className="has-text-grey-light">
              Loading... something, I swear
            </small>
          </div>
        </div>
      </section>
    );
  }
}
