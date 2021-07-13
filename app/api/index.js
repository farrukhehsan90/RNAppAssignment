// General api to access data
import ApiConstants from './ApiConstants';
export default async function api(path, params, method, token) {
  let options;
  options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
    },
    method: method,
    ...(params && { body: params }),
  };

  return fetch(ApiConstants.BASE_URL + path, options)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => error);
}
