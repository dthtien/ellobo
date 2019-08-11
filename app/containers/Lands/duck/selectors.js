import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addressDetail state domain
 */

const selectLandsState = state => state.landsReducer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddressDetail
 */

const landsSelector = () =>
  createSelector(
    selectLandsState,
    substate => substate.get('lands').toJS(),
  );

export default landsSelector;
