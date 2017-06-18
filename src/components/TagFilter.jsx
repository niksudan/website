import React from 'react';
import { findIndex, orderBy } from 'lodash';
import { connect } from 'react-redux';
import Tag from './Tag';
import projects from '../data/projects.json';
import { setFilter, clearFilter } from '../actions/projects';
import './styles/TagFilter.css';

const TagFilter = ({ dispatch }) => {
  let tags = [];
  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      const tagIndex = findIndex(tags, { name: tag });
      if (tagIndex === -1) {
        tags.push({ name: tag, count: 1 });
      } else {
        const currentTag = tags[tagIndex];
        tags[tagIndex] = { name: tag, count: currentTag.count + 1 };
      }
    });
  });
  tags = orderBy(tags, ['count', 'name'], ['desc', 'asc']);
  return (
    <div className="tagfilter">
      {tags.map((tag) => (
        <a key={tag.name} onClick={() => { dispatch(setFilter(tag.name)) }}>
          <Tag tag={tag.name}>
            {tag.name} ({tag.count})
          </Tag>
        </a>
      ))}
      <a onClick={() => { dispatch(clearFilter()) }}>
        <Tag tag="clear">
          clear
        </Tag>
      </a>
    </div>
  );
};

export default connect()(TagFilter);
