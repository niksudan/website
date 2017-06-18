import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Button from '../components/Button';
import FontAwesome from 'react-fontawesome';
import './styles/InfoboxLarge.css';

const InfoboxLarge = ({ infobox }) => (
  <div className="infobox-large">
    <Helmet
      title="About"
      meta={[
        { name: "description", content: infobox.data.description },
        { property: "og:title", content: `About ${infobox.data.name}` },
        { property: "og:description", content: infobox.data.description },
        { property: "og:type", content: "website" },
        { propety: "og:image", content: infobox.data.avatar },
        { property: "og:url", content: `${window.location.hostname}/about` },
        { property: "twitter:card", content: "summary" },
        { property: "twitter:site", content: "@niksudan" },
        { property: "twitter:title", content: `About ${infobox.data.name}` },
        { property: "twitter:description", content: infobox.data.description },
      ]}
    />
    <div className="infobox-large__avatar">
      <img src={infobox.data.avatar} alt="Avatar" />
    </div>
    <div className="infobox-large__heading">
      <h1>{infobox.data.name}</h1>
      <p>{infobox.data.description}</p>
      {infobox.data.cta &&
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = infobox.data.cta.link;
        }}>{infobox.data.cta.name}</Button>
      }
    </div>
    <div className="infobox-large__content">
      {infobox.data.links.map((section, index) => (
        <div key={index}>
          <h3>{section.name}</h3>
          <ul>
            {section.links.map((link, subindex) => (
              <li key={subindex}>
                <a href={link.link} target="_blank">
                  {link.icon &&
                    <FontAwesome name={link.icon} />
                  }
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  infobox: state.infobox,
});

export default connect(mapStateToProps)(InfoboxLarge);
