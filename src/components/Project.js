import React from 'react';
import Helmet from 'react-helmet';
import Button from './Button';
import './styles/Project.css';

const Project = ({ data }) => (
  <div className="project">
    <Helmet
      title={data.name}
      meta={[
        { name: "description", content: data.description },
        { property: "og:title", content: data.name },
        { property: "og:description", content: data.description },
        { property: "og:type", content: "article" },
        { property: "twitter:card", content: "summary" },
        { property: "twitter:site", content: "@niksudan" },
        { property: "twitter:title", content: data.name },
        { property: "twitter:description", content: data.description },
      ]}
    />
    {data.image &&
      <img src={data.image} alt={data.name} title={data.name} />
    }
    <h4>{data.date}</h4>
    <h1>{data.name}</h1>
    <div>
      {data.tags.map((tag) => (
        <h6 className={`project__tag tag--${tag}`}>{tag}</h6>
      ))}
    </div>
    <div className="project__team">
      {data.team.map((member) => (
        <div>
          <h5>{member.name}</h5>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
    <p>{data.description}</p>
    {data.links &&
      <ul>
        {data.links.map((link, index) => (
          <li key={index}>
            <a target="_blank" href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    }
  </div>
);

export default Project;
