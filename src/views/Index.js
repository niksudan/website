import React from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';
import { browserHistory } from 'react-router';
import Panel from '../components/Panel';
import Project from '../components/Project';
import Modal from '../components/Modal';
import { MOTION_MODAL } from '../constants/motion';
import { selectProject, unselectProject } from '../actions/projects';
import { openInfobox } from '../actions/infobox';

const Index = ({ dispatch, projects }) => {

  // Attempt to find and appropriate modal via pathname
  const path = window.location.pathname;
  if (!projects.isOpen && path !== '/') {
    let found = false;
    if (path === '/about') {
      dispatch(openInfobox());
      found = true;
    } else {
      projects.items.forEach((project, index) => {
        if (`/${project.slug}` === path && !found) {
          dispatch(selectProject(index));
          found = true;
        }
      });
    }
  }
  
  return (
    <div className="app__view">
      {projects.items.map((project, index) => (
        <Panel
          key={index}
          index={index}
          data={project}
          />
      ))}
      <Motion
        defaultStyle={{ transition: 0 }}
        style={{ transition: spring(projects.isOpen ? 1 : 0, MOTION_MODAL) }}
        >
        {style =>
          projects.current &&
          <Modal
            transition={style.transition}
            handleClose={(e) => {
              e.preventDefault();
              dispatch(unselectProject());
              browserHistory.push('/');
            }}
            >
            <Project data={projects.current} />
          </Modal>
        }
      </Motion>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(Index);
