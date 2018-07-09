import { data} from '../data/currencies';
import drop from 'dot-prop-immutable';
import {
  CHANGE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  CHANGE_BASE_AMOUNT,
  CHANGE_THEME_COLOR
} from "../Actions/action";
export default (reducer = (state = data, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return drop.set(state, `currencies.${action.name}`, action.currency);
      break;

    case CHANGE_QUOTE_CURRENCY:
      return drop.set(state, `currencies.quoteCurrency`, action.currency);
      break;

    case CHANGE_BASE_AMOUNT:
      return drop.set(state, "currencies.amount", action.amount);

    case CHANGE_THEME_COLOR:
      return drop.set(state, "themes.primaryColor", action.color);
  }

  return state;
});