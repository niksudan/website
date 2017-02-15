import React from 'react';
import { connect } from 'react-redux';
import { openInfobox, closeInfobox } from '../actions/infobox';
import InfoboxLarge from '../components/InfoboxLarge';
import './styles/Infobox.css';

const Infobox = ({ dispatch, infobox }) => {
  const avatarUrl = 'http://www.gravatar.com/avatar/88b83f86433e9aff6e3a1d25735384a6?s=500';

  /**
   * Handle opening of infobox
   * @param {Event} e
   */
  const handleOpen = (e) => {
    e.preventDefault();
    dispatch(openInfobox());
  };
  
  /**
   * Handle closing of infobox
   * @param {Event} e
   */
  const handleClose = (e) => {
   e.preventDefault();
   dispatch(closeInfobox());
 };

  let content = (
    <div className="infobox-small" onClick={handleOpen}>
      <div className="infobox-small__heading">
        <h2>Nik Sudan</h2>
        <p>Click for info</p>
      </div>
      <div className="infobox-small__avatar">
        <img src={avatarUrl} alt="Avatar" />
      </div>
    </div>
  );

  if (infobox.isOpen) {
    content = (
      <InfoboxLarge handleClose={handleClose} avatarUrl={avatarUrl} />
    );
  }

  return (
    <div className="infobox">
      {content}
    </div>
  );
}

const mapStateToProps = (state) => ({
  infobox: state.infobox,
});

export default connect(mapStateToProps)(Infobox);
