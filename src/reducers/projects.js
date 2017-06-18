import { assign } from 'lodash';
import * as actions from '../constants/actions';
import projects from '../data/projects';

const initialState = {
  items: projects.reverse(),
  activeItems: projects.slice(0, 12),
  page: 0,
  current: null,
  isOpen: false,
  filter: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SELECT_PROJECT:
      if (state.items.length >= action.index) {
        return assign({}, state, {
          current: state.items[action.index],
          isOpen: true,
        });
      }
      return state;
    case actions.UNSELECT_PROJECT:
      return assign({}, state, {
        isOpen: false,
      });
    case actions.LOAD_PROJECTS:
      return assign({}, state, {
        activeItems: state.items.slice(0, 12 * (state.page + 2)),
        page: state.page + 1,
      });
    case actions.SET_FILTER:
      return assign({}, state, {
        filter: action.filter,
        activeItems: state.items,
        page: 0,
      });
    case actions.CLEAR_FILTER:
      return assign({}, state, {
        filter: false,
        activeItems: projects.slice(0, 12),
        page: 0,
      });
    default:
      return state;
  }
};
