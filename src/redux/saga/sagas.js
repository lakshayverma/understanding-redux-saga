import { call, put, takeLatest } from 'redux-saga/effects';

import { actionsSupported as userActions } from '../reducer/bookReducer';

const getRecords = (isbn = null) => {
    console.log("Getting Records");

    const results = fetch('https://www.googleapis.com/books')
        .then(response => response.json());

    return results;

}

function* fetchBook(action) {
    try {
        const json = yield call(getRecords, action.payload.isbn);
        yield put({ type: userActions.SUCCEEDED, response: json });
    } catch (e) {
        yield put({ type: userActions.FAILED, message: e.message });
    }
}

function* mySaga() {
    yield takeLatest(userActions.REQUESTED)
}

export default mySaga;
