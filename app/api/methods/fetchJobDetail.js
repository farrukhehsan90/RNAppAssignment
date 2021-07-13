import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchJobDetail(jobId, token) {
    return Api(
        ApiConstants.JOB_DETAILS + jobId,
        null,
        'GET',
        token,
    );
}
