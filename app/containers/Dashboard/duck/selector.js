import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDashboard = state => state.dashboard || initialState;

export const addressesSelector = () =>
  createSelector(
    selectDashboard,
    dashboardState => dashboardState.get('addresses').toJS(),
  );

export const addressNamesSelector = () =>
  createSelector(
    selectDashboard,
    dashboardState => dashboardState.get('addressNames').toJS(),
  );
