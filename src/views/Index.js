import React from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';
import { browserHistory } from 'react-router';
import InfiniteScroll from 'react-infinite-scroller';
import Panel from '../components/Panel';
import Project from '../components/Project';
import Modal from '../components/Modal';
import { MOTION_MODAL } from '../constants/motion';
import { unselectProject, loadProjects } from '../actions/projects';

const Index = ({ dispatch, projects }) => (
  <div className="app__view">
    <InfiniteScroll
      pageStart={projects.page}
      loadMore={() => {
        dispatch(loadProjects());
      }}
      hasMore={projects.items.length > projects.activeItems.length}
      loader={<div />}
      >
      {projects.activeItems.map((project, index) => (
        <Panel
          key={index}
          index={index}
          data={project}
          />
      ))}
    </InfiniteScroll>
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

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(Index);
