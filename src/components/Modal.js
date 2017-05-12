import React from 'react';
import Button from '../components/Button';
import './styles/Modal.css';

const Modal = ({ transition, handleClose, origin = 'center center', children }) => {
  if (transition === 0) {
    return null;
  }
  const stretch = 1 - (0.75 * (1 - transition));
  return (
    <div className="modal" style={{ 
      opacity: transition, 
      transform: `scale(${stretch}, ${stretch})`,
      transformOrigin: origin,
    }}>
      <div className="modal__wrapper">
        <div>
          {children}
          <Button onClick={handleClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
