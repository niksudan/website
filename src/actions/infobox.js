import * as actions from '../constants/actions';

export const openInfobox = () => {
  document.body.classList.add('noscroll');
  return {
    type: actions.OPEN_INFOBOX,
  };
};

export const closeInfobox = () => {
  document.body.classList.remove('noscroll');
  return {
    type: actions.CLOSE_INFOBOX,
  };
};
