import * as actions from '../constants/actions';

const initialState = { isOpen: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN_INFOBOX:
      return { isOpen: true };
    case actions.CLOSE_INFOBOX:
      return { isOpen: false };
    default:
      return state;
  }
};
