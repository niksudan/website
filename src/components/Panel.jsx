import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import uniqueRandomArray from 'unique-random-array';
import { selectProject } from '../actions/projects';
import placeholders from '../data/placeholders';
import TagList from './TagList';
import './styles/Panel.css';

const placeholder = uniqueRandomArray(placeholders);

const Panel = ({ dispatch, data, index }) => {
  return (
    <a href={`/${data.slug}`} className="panel" onClick={(e) => {
      e.preventDefault();
      dispatch(selectProject(index));
      browserHistory.push(`/${data.slug}`);
    }}>
      <div className="panel__image" style={{
        backgroundImage: `url('${data.image ? data.image : placeholder()}')`
      }}></div>
      <div className="panel__content">
        <h5>{data.date}</h5>
        <h2>{data.name}</h2>
      </div>
      <TagList tags={data.tags} />
    </a>
  );
};

export default connect()(Panel);
