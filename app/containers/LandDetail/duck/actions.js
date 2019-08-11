/*
 *
 * AddressDetail actions
 *
 */

import * as types from './constants';

export function getLand(payload) {
  return {
    type: types.GET_LAND,
    payload,
  };
}

export function getLandSuccess(payload) {
  return {
    type: types.GET_LAND_SUCCESS,
    payload,
  };
}

export function getLandError(payload) {
  return {
    type: types.GET_LAND_ERROR,
    payload,
  };
}
