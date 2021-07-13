// export action creators
import * as loginActions from './loginActions';
import * as jobsActions from './jobsActions';
import * as navigationActions from './navigationActions';

export const ActionCreators = Object.assign(
  {},
  jobsActions,
  loginActions,
  navigationActions,
);
