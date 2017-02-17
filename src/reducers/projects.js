import * as actions from '../constants/actions';
import projects from '../data/projects';

const initialState = {
  items: projects.reverse(),
  activeItems: projects.slice(0, 12),
  page: 0,
  current: null,
  isOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SELECT_PROJECT:
      if (state.items.length >= action.index) {
        return {
          items: state.items,
          activeItems: state.activeItems,
          current: state.items[action.index],
          isOpen: true,
          page: state.page,
        };
      }
      return state;
    case actions.UNSELECT_PROJECT:
      return {
        items: state.items,
        activeItems: state.activeItems,
        current: state.current,
        isOpen: false,
        page: state.page,
      };
    case actions.LOAD_PROJECTS:
      return {
        items: state.items,
        activeItems: state.items.slice(0, 12 * (state.page + 2)),
        current: state.current,
        isOpen: state.isOpen,
        page: state.page + 1,
      }
    default:
      return state;
  }
};
