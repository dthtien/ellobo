/*
 *
 * AddressDetail actions
 *
 */

import * as types from './constants';

export function getLands(payload) {
  return {
    type: types.GET_LANDS,
    payload,
  };
}

export function getLandsSuccess(payload) {
  return {
    type: types.GET_LANDS_SUCCESS,
    payload,
  };
}

export function getLandsError(payload) {
  return {
    type: types.GET_LANDS_ERROR,
    payload,
  };
}
