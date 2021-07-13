import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchJobs(pageNumber, token) {
    return Api(
        ApiConstants.FETCH_JOBS + pageNumber,
        null,
        'GET',
        token,
    );
}
