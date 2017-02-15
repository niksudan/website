import React from 'react';
import './styles/Button.css';

const Button = ({ onClick, children }) => {
  return (
    <div className="button" onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
