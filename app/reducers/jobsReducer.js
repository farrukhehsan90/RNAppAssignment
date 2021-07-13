/* jobs Reducer
 * handles jobs states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  jobs: [],
  error: null,
};

export const jobsReducer = createReducer(initialState, {
  [types.JOBS_REQUEST](state, action) {
    return {
      ...state,
      jobs: action.payload,
      error: null,
    };
  },
  [types.JOBS_SUCCESS](state, action) {
    return {
      ...state,
      jobs: action.payload,
      error: null,
    };
  },
  [types.JOBS_FAILURE](state, action) {
    return {
      ...state,
      error: action.payload,
    };
  },
});

