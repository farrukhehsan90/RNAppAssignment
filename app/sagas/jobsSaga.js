import { takeLatest, put, call } from 'redux-saga/effects';
import * as jobsActions from '../actions/jobsActions';
import fetchJobs from 'app/api/methods/fetchJobs';
import deviceStorage from '../api/methods/deviceStorage';

export default function* jobsSaga({ payload }) {

  let list;
  const accessToken = yield deviceStorage.loadToken().then((response) => {
    list = response;
    return list;
  })


  let pageNumber = payload?.pageCount;

  try {
    const response = yield call(_ => fetchJobs(pageNumber, list));

    if (response && response.Data) {
      yield put(jobsActions.jobsSuccess(response.Data));

    }
  } catch (error) {
    yield put(jobsActions.jobsFailure(error));
  }
}
