import React from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';
import { openInfobox, closeInfobox } from '../actions/infobox';
import InfoboxLarge from '../components/InfoboxLarge';
import './styles/Infobox.css';

const Infobox = ({ dispatch, infobox }) => {
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

  return (
    <div className="infobox">
      <div className="infobox-small" onClick={handleOpen}>
        <div className="infobox-small__heading">
          <h4>{infobox.data.name}</h4>
          <p>{infobox.data.instruction}</p>
        </div>
        <div className="infobox-small__avatar">
          <img src={infobox.data.avatar} alt="Avatar" />
        </div>
      </div>
      <Motion
        defaultStyle={{ transition: 0 }}
        style={{ transition: infobox.isOpen ? spring(1) : spring(0) }}
        >
        {style =>
          <InfoboxLarge
            transition={style.transition}
            handleClose={handleClose}
          />
        }
      </Motion>
    </div>
  );
}

const mapStateToProps = (state) => ({
  infobox: state.infobox,
});

export default connect(mapStateToProps)(Infobox);
