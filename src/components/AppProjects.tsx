import * as React from 'react';
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
          <div className="columns is-multiline">
            {projects.map((project, index) => (
              <div className="column is-4 is-3-widescreen" key={index}>
                <Project
                  img={project.img}
                  title={project.title}
                  release={`${project.month} ${project.year}`}
                  description={project.description}
                  href={project.href}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
