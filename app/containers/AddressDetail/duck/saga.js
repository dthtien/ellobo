/* eslint-disable quotes */
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { AddressesApi as api } from '../../../api';
import { GET_ADDRESS } from './constants';
import { getAddressSuccess, getAddressError } from './actions';

function* getAddress(action) {
  try {
    const response = yield call(api.show, action.payload);
    yield put(getAddressSuccess(response.data));
  } catch (error) {
    yield put(getAddressError(error));
  }
}

export default function* getAddressSaga() {
  yield all([takeLatest(GET_ADDRESS, getAddress)]);
}
