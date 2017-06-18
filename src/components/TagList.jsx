import React from 'react';
import FontAwesome from 'react-fontawesome';
import './styles/TagList.css';

const TagList = ({ tags }) => (
  <div className="taglist">
    {tags.map((tag) => (
      <h6 key={tag} className={`tag tag--${tag}`}>
        {tag === 'game' &&
          <FontAwesome name="gamepad" />
        }
        {tag === 'cancelled' &&
          <FontAwesome name="ban" />
        }
        {tag === 'article' &&
          <FontAwesome name="book" />
        }
        {tag === 'open-source' &&
          <FontAwesome name="code-fork" />
        }
        {tag === 'music' &&
          <FontAwesome name="music" />
        }
        {tag === 'podcast' &&
          <FontAwesome name="podcast" />
        }
        {tag === 'video' &&
          <FontAwesome name="youtube-play" />
        }
        {tag === 'collaboration' &&
          <FontAwesome name="users" />
        }
        {tag === 'in-development' &&
          <FontAwesome name="edit" />
        }
        {tag}
      </h6>
    ))}
  </div>
);

export default TagList;
