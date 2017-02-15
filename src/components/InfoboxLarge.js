import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import './styles/InfoboxLarge.css';

const InfoboxLarge = ({ infobox, handleClose, transition = 0 }) => {
  if (transition === 0) {
    return <div />;
  }
  const stretch = 1 - (0.75 * (1 - transition));
  return (
    <div className="infobox-large" style={{
      opacity: transition,
      transform: `scale(${stretch}, ${stretch})`,
    }}>
      <div className="infobox-large__wrapper">
        <div>
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
          <Button onClick={handleClose}>Close</Button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  infobox: state.infobox,
});

export default connect(mapStateToProps)(InfoboxLarge);
