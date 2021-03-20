import post from '../../reducers/postreducer'

export const FETCH_POST = "FETCH_POST";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE"
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";

export const fetchPostBegin = () => ({
    type: FETCH_POST
});

export const fetchPostFailure = error => ({
    type: FETCH_POST_FAILURE,
    payload: { error }
});

export const fetchPostSuccess = async dispatch => {
    dispatch({type: FETCH_POST_SUCCESS, payload: post});
};