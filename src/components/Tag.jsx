import React from 'react';
import FontAwesome from 'react-fontawesome';

const Tag = ({ tag, children }) => (
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
    {tag === 'clear' && 
      <FontAwesome name="times-circle" />
    }
    {children}
  </h6>
);

export default Tag;
