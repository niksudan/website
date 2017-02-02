import React from 'react';
import Index from '../views/Index';

const App = ({ children }) => {
  return (
    <div className="app">
      {children || <Index />}
    </div>
  );
};

export default App;
