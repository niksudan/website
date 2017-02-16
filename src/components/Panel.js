import React from 'react';
import { connect } from 'react-redux';
import randomItem from 'random-item';
import { selectProject } from '../actions/projects';
import placeholders from '../data/placeholders';
import './styles/Panel.css';

const Panel = ({ dispatch, data, index }) => {
  return (
    <div className="panel" onClick={(e) => {
      e.preventDefault();
      dispatch(selectProject(index));
    }}>
      <div className="panel__image" style={{
        backgroundImage: `url('${data.image ? data.image : randomItem(placeholders)}')`
      }}></div>
      <div className="panel__content">
        <h4>{data.date}</h4>
        <h2>{data.name}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(Panel);
