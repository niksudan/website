import React from 'react';
import Index from '../views/Index';
import Infobox from '../components/Infobox';
import './styles/App.css';

const App = ({ children }) => (
  <div className="app">
    <Infobox />
    {children || <Index />}
  </div>
);

export default App;
