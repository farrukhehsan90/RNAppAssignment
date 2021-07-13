import * as types from './types';

export const getJobs = payload => ({ type: types.JOBS_REQUEST, payload });

export const jobsSuccess = payload => ({ type: types.JOBS_SUCCESS, payload });

export const jobsFailure = payload => ({ type: types.JOBS_FAILURE, payload });
