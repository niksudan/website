import * as actions from '../constants/actions';

export const selectProject = (index) => ({
  type: actions.SELECT_PROJECT,
  index,
});

export const unselectProject = () => ({
  type: actions.UNSELECT_PROJECT,
});
