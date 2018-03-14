
import { actionTypes } from "./../actions/localeActions"

const initialState = {
  languages: ['en-US', 'pt-BR', 'es-ES'],
  locale: 'pt-BR'
};

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case actionTypes.CHANGE_LOCALE:
      return {
        ...state,
        locale: payload
      }

    default:
      return state
  }
}
