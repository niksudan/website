import React from 'react';
import Helmet from 'react-helmet';
import Index from '../views/Index';
import Infobox from '../components/Infobox';
import './styles/App.css';

const App = ({ children }) => (
  <div className="app">
    <Helmet
      title="Games, Music and Other Things"
      titleTemplate="%s | Nik Sudan's Portfolio"
      meta={[
        { name: "description", content: 'Things and stuff by Nik Sudan, a developer, musician and moocher.' },
        { property: "og:title", content: 'Nik Sudan\'s Portfolio' },
        { property: "og:description", content: 'Things and stuff by Nik Sudan, a developer, musician and moocher.' },
        { property: "og:type", content: "article" },
        { property: "twitter:card", content: "summary" },
        { property: "twitter:site", content: "@niksudan" },
        { property: "twitter:title", content: 'Nik Sudan\'s Portfolio' },
        { property: "twitter:description", content: 'Things and stuff by Nik Sudan, a developer, musician and moocher.' },
      ]}
    />
    <Infobox />
    {children || <Index />}
  </div>
);

export default App;
