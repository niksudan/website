import React from 'react';
import Tag from './Tag';
import './styles/TagList.css';

const TagList = ({ tags }) => (
  <div className="taglist">
    {tags.map((tag) => (
      <Tag key={tag} tag={tag}>
        {tag}
      </Tag>
    ))}
  </div>
);

export default TagList;
