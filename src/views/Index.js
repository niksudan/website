import React from 'react';
import { connect } from 'react-redux';
import Panel from '../components/Panel';

const Index = ({ dispatch, projects }) => {
  return (
    <div className="app__view">
      {projects.items.reverse().map((project, index) => (
        <Panel key={index} data={project} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(Index);
