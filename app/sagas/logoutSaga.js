import * as loginActions from 'app/actions/loginActions';
import { call, put } from 'redux-saga/effects';
export default function* logout() {
    yield call(loginActions.onLogoutResponse());
  }