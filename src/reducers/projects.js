import * as actions from '../constants/actions';

const initialState = {
  items: require('../data/projects'),
  current: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SELECT_PROJECT:
      if (state.items.length >= action.index) {
        return {
          items: state.items,
          current: state.items[action.index],
        };
      }
      return state;
    case actions.UNSELECT_PROJECT:
      return {
        items: state.items,
        current: null,
      };
    default:
      return state;
  }
};
