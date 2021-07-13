/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import jobsSaga from './jobsSaga';
import logoutSaga from './logoutSaga'
export default function* watch() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
  yield all([takeEvery(types.JOBS_REQUEST, jobsSaga)]);
  yield all([takeEvery(types.REMOVE_USER, logoutSaga)]);

}
