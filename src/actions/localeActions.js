export const actionTypes = {
  CHANGE_LOCALE: "locale/CHANGE_LOCALE"
};

const changeLocale = locale => dispatch => {
  dispatch({
    type: actionTypes.CHANGE_LOCALE,
    payload: locale
  });
};

export default {
  changeLocale
};
