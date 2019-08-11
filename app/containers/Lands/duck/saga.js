/* eslint-disable quotes */
import { call, put, takeLatest, all } from 'redux-saga/effects';
import api from './api';
import { GET_LANDS } from './constants';
import { getLandsSuccess, getLandsError } from './actions';

function* getLands(action) {
  try {
    const response = yield call(api.index, action.payload);
    yield put(getLandsSuccess(response.data));
  } catch (error) {
    yield put(getLandsError(error));
  }
}

export default function* getLandsSaga() {
  yield all([takeLatest(GET_LANDS, getLands)]);
}
