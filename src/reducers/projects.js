import * as actions from '../constants/actions';
import projects from '../data/projects';

const initialState = {
  items: projects.reverse(),
  current: null,
  isOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SELECT_PROJECT:
      if (state.items.length >= action.index) {
        return {
          items: state.items,
          current: state.items[action.index],
          isOpen: true,
        };
      }
      return state;
    case actions.UNSELECT_PROJECT:
      return {
        items: state.items,
        current: state.current,
        isOpen: false,
      };
    default:
      return state;
  }
};
