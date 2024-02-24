//Write the ActionCreator functions here

import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('https://reqres.in/api/login', credentials);
    dispatch(loginSuccess(response.data.token));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};