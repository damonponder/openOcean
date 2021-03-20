import data from '../../../data/db.json'
console.log(data)
export const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN
});

export const fetchDataFailure = error => ({
    type: FETCH_DATA_FAILURE,
    payload: { error }
});

export const fetchDataSuccess = async dispatch => {
    dispatch({ type: FETCH_DATA_SUCCESS, payload: data.hits });
};