import React from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';
import Modal from '../components/Modal';
import InfoboxLarge from '../components/InfoboxLarge';
import { openInfobox, closeInfobox } from '../actions/infobox';
import './styles/Infobox.css';

const Infobox = ({ dispatch, infobox }) => (
  <div className="infobox">
    <div className="infobox-small" onClick={(e) => {
      e.preventDefault();
      dispatch(openInfobox());
    }}>
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
        <Modal
          transition={style.transition}
          handleClose={(e) => {
            e.preventDefault();
            dispatch(closeInfobox());
          }}
          origin="top right"
          >
          <InfoboxLarge />
        </Modal>
      }
    </Motion>
  </div>
);

const mapStateToProps = (state) => ({
  infobox: state.infobox,
});

export default connect(mapStateToProps)(Infobox);
