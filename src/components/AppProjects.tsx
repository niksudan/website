import * as React from 'react';
import TrackVisibility from 'react-on-screen';
import Project from './Project';
import projects, { IProject, ITag } from '../data/projects';
import * as uniq from 'lodash.uniq';

const tags: ITag[] = uniq(projects.map((project) => project.tags).flat());

interface State {
  projects: IProject[];
  tag?: ITag;
}

export default class AppProjects extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = { projects };
    this.handleTagSelection = this.handleTagSelection.bind(this);
  }

  /**
   * Handle selection of a tag
   */
  handleTagSelection(tag: ITag) {
    if (this.state.tag !== tag) {
      this.setState({
        tag,
        projects: projects.filter((project) => project.tags.includes(tag)),
      });
    } else {
      this.setState({
        tag: undefined,
        projects,
      });
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title has-text-white">What?</h2>
          <p className="subtitle has-text-white">
            I make a lot of stuff, but here's just the cool bits:
          </p>
          <div className="tags">
            {tags.map((tag) => (
              <span
                className={`tag${
                  this.state.tag === tag ? ' is-primary' : ' is-dark'
                }`}
                key={tag}
                style={{ cursor: 'pointer', userSelect: 'none' }}
                onClick={() => this.handleTagSelection(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="columns is-centered is-multiline projects">
            {this.state.projects.map((project, index) => (
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
