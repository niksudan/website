import * as React from 'react';
import TrackVisibility from 'react-on-screen';
import Project from './Project';
import projects from '../data/projects';

export default class AppProjects extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-3 has-text-white">What?</h2>
          <p className="subtitle is-5 has-text-white">
            I make a lot of stuff, but here's just the cool bits:
          </p>
          <div className="columns is-centered is-multiline projects">
            {projects.map((project, index) => (
              <TrackVisibility
                key={index}
                className="column is-4 is-3-widescreen"
                offset={window.innerHeight}
                partialVisibility
                once
              >
                {({ isVisible }) =>
                  isVisible && (
                    <Project
                      img={project.img}
                      title={project.title}
                      release={`${project.month} ${project.year}`}
                      description={project.description}
                      href={project.href}
                      tags={project.tags}
                    />
                  )
                }
              </TrackVisibility>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
