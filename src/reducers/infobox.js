import * as actions from '../constants/actions';

const initialState = {
  isOpen: false,
  data: require('../data/info')
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN_INFOBOX:
      return {
        isOpen: true,
        data: state.data,
      };
    case actions.CLOSE_INFOBOX:
      return {
        isOpen: false,
        data: state.data,
      };
    default:
      return state;
  }
};
