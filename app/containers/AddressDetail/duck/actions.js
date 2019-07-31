/*
 *
 * AddressDetail actions
 *
 */

import * as types from './constants';

export function getAddress(payload) {
  return {
    type: types.GET_ADDRESS,
    payload,
  };
}

export function getAddressSuccess(payload) {
  return {
    type: types.GET_ADDRESS_SUCCESS,
    payload,
  };
}

export function getAddressError(payload) {
  return {
    type: types.GET_ADDRESS_ERROR,
    payload,
  };
}
