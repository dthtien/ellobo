import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  address: {
    loading: false,
    data: null,
    error: false,
  },
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_ADDRESS:
      return state.withMutations(mutableState => {
        mutableState.set(
          'address',
          fromJS({
            data: null,
            loading: true,
            error: false,
          }),
        );
      });
    case types.GET_ADDRESS_SUCCESS:
      return state.withMutations(mutableState => {
        mutableState.set(
          'address',
          fromJS({
            data: action.payload,
            loading: false,
            error: false,
          }),
        );
      });
    case types.GET_ADDRESS_ERROR:
      return state.withMutations(mutableState => {
        mutableState.set(
          'address',
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
