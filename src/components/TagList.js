import React from 'react';
import './styles/TagList.css';

const TagList = ({ tags }) => (
  <div className="taglist">
    {tags.map((tag) => (
      <h6 className={`tag tag--${tag}`}>{tag}</h6>
    ))}
  </div>
);

export default TagList;
