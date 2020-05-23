import { call, put, takeLatest, actionChannel, all } from 'redux-saga/effects';

import getBookSaga from "./sagas";

export default function* rootSaga() {
    yield all([
        getBookSaga(),
    ]);
}
