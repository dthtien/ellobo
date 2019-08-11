/* eslint-disable quotes */
import { call, put, takeLatest, all } from 'redux-saga/effects';
import api from './api';
import { GET_LAND } from './constants';
import { getLandSuccess, getLandError } from './actions';

function* getLand(action) {
  try {
    const response = yield call(api.show, action.payload);
    yield put(getLandSuccess(response.data.data));
  } catch (error) {
    yield put(getLandError(error));
  }
}

export default function* getLandSaga() {
  yield all([takeLatest(GET_LAND, getLand)]);
}
