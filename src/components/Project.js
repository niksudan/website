import React from 'react';
import Helmet from 'react-helmet';
import FontAwesome from 'react-fontawesome';
import TagList from './TagList';
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
    <TagList tags={data.tags} />
    <div className="project__team">
      {data.team.map((member) => (
        <div key={member.name}>
          <h5>
            {member.link &&
              <a href={member.link} target="_blank">
                <FontAwesome name="twitter" />
              </a>
            }
            {member.name}
          </h5>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
    <p>{data.description}</p>
    {data.links &&
      <ul>
        {data.links.map((link, index) => (
          <li key={index}>
            <a target="_blank" href={link.link}>
              {link.icon &&
                <FontAwesome name={link.icon} />
              }
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    }
  </div>
);

export default Project;
