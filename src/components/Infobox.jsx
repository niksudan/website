import React from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';
import { browserHistory } from 'react-router';
import Modal from '../components/Modal';
import InfoboxLarge from '../components/InfoboxLarge';
import { openInfobox, closeInfobox } from '../actions/infobox';
import { MOTION_MODAL } from '../constants/motion';
import './styles/Infobox.css';

const Infobox = ({ dispatch, infobox }) => (
  <div className="infobox">
    <a href="/about" className="infobox-small" onClick={(e) => {
      e.preventDefault();
      dispatch(openInfobox());
      browserHistory.push('/about');
    }}>
      <div className="infobox-small__heading">
        <h4>{infobox.data.name}</h4>
        <p>{infobox.data.instruction}</p>
      </div>
      <div className="infobox-small__avatar">
        <img src={infobox.data.avatar} alt="Avatar" />
      </div>
    </a>
    <Motion
      defaultStyle={{ transition: 0 }}
      style={{ transition: spring(infobox.isOpen ? 1 : 0, MOTION_MODAL) }}
      >
      {style =>
        <Modal
          transition={style.transition}
          handleClose={(e) => {
            e.preventDefault();
            dispatch(closeInfobox());
            browserHistory.push('/');
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
