import { GET_WATCHES_DATA_FAILURE, GET_WATCHES_DATA_REQUEST, GET_WATCHES_DATA_SUCCESS } from '../AppReducer/actionType';

const initialState = {
    watches: [],
    isLoading: false,
    isError: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WATCHES_DATA_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case GET_WATCHES_DATA_SUCCESS:
            return { ...state, watches: action.payload, isLoading: false, isError: false };
        case GET_WATCHES_DATA_FAILURE:
            return { ...state, isLoading: false, isError: true, error: action.payload };
        default:
            return state;
    }
};

export { reducer };