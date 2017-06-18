import * as actions from '../constants/actions';

export const selectProject = (index) => {
  document.body.classList.add('noscroll');
  return {
    type: actions.SELECT_PROJECT,
    index,
  };
};

export const unselectProject = () => {
  document.body.classList.remove('noscroll');
  return {
    type: actions.UNSELECT_PROJECT,
  };
};

export const loadProjects = () => ({
  type: actions.LOAD_PROJECTS,
});

export const setFilter = (filter) => ({
  type: actions.SET_FILTER,
  filter,
});

export const clearFilter = () => ({
  type: actions.CLEAR_FILTER,
});
