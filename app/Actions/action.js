export const CHANGE_BASE_CURRENCY = "CHANGE_BASE_CURRENCY";
export const CHANGE_CURRENCY = "CHANGE_CURRENCY";
export const CHANGE_BASE_AMOUNT = "CHANGE_BASE_AMOUNT";
export const CHANGE_THEME_COLOR = "CHANGE_THEME_COLOR";
export const changeBaseCurrency = (currency) => ({
    type: CHANGE_BASE_CURRENCY,
    currency
});

export const changeCurrency = (name, currency) => ({
    type: CHANGE_CURRENCY,
    name,
    currency
});

export const changeBaseAmount = (amount) => ({
    type: CHANGE_BASE_AMOUNT,
    amount
});

export const changeThemeColor = color => ({
    type: CHANGE_THEME_COLOR,
    color
})