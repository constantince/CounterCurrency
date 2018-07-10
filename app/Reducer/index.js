import { data} from '../data/currencies';
import drop from 'dot-prop-immutable-chain';
import {
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  CHANGE_BASE_AMOUNT,
  CHANGE_THEME_COLOR
} from "../Actions/action";
export default (reducer = (state = data, action) => {
  switch (action.type) {
    //
    case CHANGE_BASE_CURRENCY:
      return drop(state)
        .set(`currencies.baseCurrency`, action.currency)
        .set("currencies.conversions", {[action.currency]: action.data})
        .value();
      break;

    case CHANGE_QUOTE_CURRENCY:
      return drop(state).set(`currencies.quoteCurrency`, action.currency).value();
      break;

    case CHANGE_BASE_AMOUNT:
      return drop(state).set("currencies.amount", action.amount).value();

    case CHANGE_THEME_COLOR:
      return drop(state).set("themes.primaryColor", action.color).value();
  }

  return state;
});