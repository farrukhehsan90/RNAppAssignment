/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import loginUser from 'app/api/methods/loginUser';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';
import deviceStorage from '../api/methods/deviceStorage';

// Our worker Saga that logins the user
export default function* loginAsync({ username, password }) {

  async function storeToken(token) {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      console.log('AsyncStorage error during token store:', error);
    }
  }

  yield put(loginActions.enableLoader());

  //how to call api
  const response = yield call(_ => loginUser(username, password));

  try {
    if (response && response.access_token) {
      deviceStorage.saveItem('token', response.access_token)
      yield put(loginActions.onLoginResponse(response.access_token));
      yield put(loginActions.disableLoader({}));
      yield call(_ => navigationActions.navigateToHome(response.access_token));
    } else {
      yield put(loginActions.loginFailed());
      yield put(loginActions.disableLoader({}));
      setTimeout(() => {
        Alert.alert('Error', 'please check your username and password');
      }, 200);
    }
  } catch (error) {
    console.log("error-----", error)
  }

}


