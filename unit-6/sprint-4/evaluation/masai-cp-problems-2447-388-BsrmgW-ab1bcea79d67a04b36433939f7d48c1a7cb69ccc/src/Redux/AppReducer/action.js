import axios from 'axios';
import { GET_WATCHES_DATA_FAILURE, GET_WATCHES_DATA_REQUEST, GET_WATCHES_DATA_SUCCESS } from '../AppReducer/actionType';

export const getWatchesDataRequest = () => ({
    type: GET_WATCHES_DATA_REQUEST
});

export const getWatchesDataSuccess = (watches) => ({
    type: GET_WATCHES_DATA_SUCCESS,
    payload: watches
});

export const getWatchesDataFailure = (error) => ({
    type: GET_WATCHES_DATA_FAILURE,
    payload: error
});

export const fetchWatchesData = () => {
    return async (dispatch) => {
        dispatch(getWatchesDataRequest());
        try {
            const response = await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/watches`);
            dispatch(getWatchesDataSuccess(response.data));
        } catch (error) {
            dispatch(getWatchesDataFailure(error.message));
        }
    };
};