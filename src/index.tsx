import * as React from 'react';
import { render } from 'react-dom';
import AppLoader from './components/AppLoader';
import AppHero from './components/AppHero';
import AppAbout from './components/AppAbout';
import AppProjects from './components/AppProjects';
import AppFooter from './components/AppFooter';
import './scss/style.scss';

interface State {
  isLoaded: boolean;
}

export default class App extends React.Component<{}, State> {
  content?: any;

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    this.setState({ isLoaded: true });
  }

  render() {
    if (!this.state.isLoaded) {
      return <AppLoader />;
    }
    return (
      <>
        <AppHero />
        <AppAbout />
        <AppProjects />
        <AppFooter />
      </>
    );
  }
}

render(<App />, document.getElementById('app'));
