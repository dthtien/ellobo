import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  lands: {
    loading: false,
    data: null,
    error: false,
  },
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_LANDS:
      return state.withMutations(mutableState => {
        mutableState.set(
          'lands',
          fromJS({
            data: null,
            loading: true,
            error: false,
          }),
        );
      });
    case types.GET_LANDS_SUCCESS:
      return state.withMutations(mutableState => {
        mutableState.set(
          'lands',
          fromJS({
            data: action.payload,
            loading: false,
            error: false,
          }),
        );
      });
    case types.GET_LANDS_ERROR:
      return state.withMutations(mutableState => {
        mutableState.set(
          'lands',
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
