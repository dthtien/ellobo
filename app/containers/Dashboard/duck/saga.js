/* eslint-disable quotes */
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { AddressesApi as api } from '../../../api';
import { GET_ADDRESSES, GET_ADDRESS_NAMES } from './constants';
import {
  indexSuccess,
  indexError,
  getAddressNamesSuccess,
  getAddressNamesError,
} from './actions';

function* getAddresses(action) {
  try {
    const data = yield call(api.index, action.payload);
    yield put(indexSuccess(data));
  } catch (error) {
    yield put(indexError(error));
  }
}

function* getAddressNamesSaga(action) {
  try {
    const response = yield call(api.getAddressNames, action.payload);
    yield put(getAddressNamesSuccess(response));
  } catch (error) {
    yield put(getAddressNamesError(error));
  }
}

export default function* getAddressesSaga() {
  yield all([
    takeLatest(GET_ADDRESSES, getAddresses),
    takeLatest(GET_ADDRESS_NAMES, getAddressNamesSaga),
  ]);
}
