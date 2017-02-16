import React from 'react';
import { connect } from 'react-redux';
import './styles/InfoboxLarge.css';

const InfoboxLarge = ({ infobox }) => (
  <div className="infobox-large">
    <div className="infobox-large__avatar">
      <img src={infobox.data.avatar} alt="Avatar" />
    </div>
    <div className="infobox-large__heading">
      <h1>{infobox.data.name}</h1>
      <p>{infobox.data.description}</p>
    </div>
    <div className="infobox-large__content">
      {infobox.data.links.map((section, index) => (
        <div key={index}>
          <h3>{section.name}</h3>
          <ul>
            {section.links.map((link, subindex) => (
              <li key={subindex}>
                <a href={link.link} target="_blank">{link.name}</a>
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
