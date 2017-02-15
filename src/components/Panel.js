import React from 'react';
import './styles/Panel.css';

const Panel = ({ children }) => {
  return (
    <div className="panel">
      {children}
    </div>
  );
};

export default Panel;
