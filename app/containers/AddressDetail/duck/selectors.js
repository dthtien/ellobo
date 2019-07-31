import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addressDetail state domain
 */

const selectAddressDetailDomain = state => state.addressDetail || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddressDetail
 */

const addressSelector = () =>
  createSelector(
    selectAddressDetailDomain,
    substate => substate.get('address').toJS(),
  );

export default addressSelector;
