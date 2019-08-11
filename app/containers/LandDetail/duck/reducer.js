import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  land: {
    loading: false,
    data: null,
    error: false,
  },
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_LAND:
      return state.withMutations(mutableState => {
        mutableState.set(
          'land',
          fromJS({
            data: null,
            loading: true,
            error: false,
          }),
        );
      });
    case types.GET_LAND_SUCCESS:
      return state.withMutations(mutableState => {
        mutableState.set(
          'land',
          fromJS({
            data: action.payload,
            loading: false,
            error: false,
          }),
        );
      });
    case types.GET_LAND_ERROR:
      return state.withMutations(mutableState => {
        mutableState.set(
          'land',
          fromJS({
            data: null,
            loading: false,
            error: true,
          }),
        );
      });
    default:
      return state;
  }
}
