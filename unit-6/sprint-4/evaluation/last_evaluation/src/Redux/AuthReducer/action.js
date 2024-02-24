
import axios from 'axios';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (email, password) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login', {
      email,
      password,
    });

    dispatch(loginSuccess(response.data.token));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logout = () => ({
  type: LOGOUT,
});
