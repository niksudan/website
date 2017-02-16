import React from 'react';
import './styles/Project.css';

const Project = ({ data }) => (
  <div className="project">
    <h4>{data.date}</h4>
    <h1>{data.name}</h1>
    <p>{data.description}</p>
  </div>
);

export default Project;
