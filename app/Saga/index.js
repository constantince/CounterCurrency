import{takeEvery, takeLatest, put, call, all} from "redux-saga/effects";
const _fetch = (base) => {
    return fetch(`http://fixer.handlebarlabs.com/latest?base=${base}`).then(
      res => res.json()
    );
}

const loadCurrncy = function* (action) {
    const data = yield call(_fetch, action.value);
    yield put({ type: 'CHANGE_BASE_CURRENCY', currency: action.value, data});
    if (action.other) {
        yield put({ type: 'CHANGE_QUOTE_CURRENCY', currency: action.other});
    }
}

export const getCurrency = function* (action) {
    yield takeLatest('GET_CURRENCY', loadCurrncy)
}

export default root = function* () {
    yield all([getCurrency()])
}