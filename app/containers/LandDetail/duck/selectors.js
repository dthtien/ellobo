import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addressDetail state domain
 */

const selectLandsState = state => state.landReducer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddressDetail
 */

const landSelector = () =>
  createSelector(
    selectLandsState,
    substate => substate.get('land').toJS(),
  );

export default landSelector;
