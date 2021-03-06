import {
    FETCH_POST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE
} from "../../actions/postaction/postAction";

const initialState = {
    post: [],
    pending: false,
    error: null
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POST:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                pending: true
            };

        case FETCH_POST_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            console.log(action.payload);
            return {
                ...state,
                pending: false,
                post: action.payload
            };

        case FETCH_POST_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                pending: false,
                error: action.error,
                post: []
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}