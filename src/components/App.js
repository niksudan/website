import React from 'react';
import Index from '../views/Index';
import Infobox from '../components/Infobox';

const App = ({ children }) => (
  <div className="app">
    <Infobox />
    {children || <Index />}
  </div>
);

export default App;
