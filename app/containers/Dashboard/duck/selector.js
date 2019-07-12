import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDashboard = state => state.dashboard || initialState;

export const addressesSelector = () =>
  createSelector(
    selectDashboard,
    dashboardState => dashboardState.get('addresses').toJS(),
  );
