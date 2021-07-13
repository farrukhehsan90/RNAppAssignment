import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function loginUser(username, password) {
  return Api(
    ApiConstants.LOGIN,
    `password=${password}&username=${username}&grant_type=password`,
    'POST',
    null,
  );
}
