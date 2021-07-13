/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as jobsReducer from './jobsReducer';

export default Object.assign(loginReducer, loadingReducer, jobsReducer);
