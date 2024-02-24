import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_REQUEST,
  POST_BOOK_REQUEST,
  POST_BOOK_SUCCESS,
  POST_BOOK_FAILURE,
} from "./actionTypes";
import axios from "axios";



export const getBookRequest = () => {
  return {
    type: GET_BOOKS_REQUEST,
  };
};

export const getBookSuccess = (payload) => {
  return {
    type: GET_BOOKS_SUCCESS,
    payload: payload,
  };
};

export const getBookFailure = (error) => {
  return {
    type: GET_BOOKS_FAILURE,
    payload: error,
  };
};


export const getDataBooks = () => {
  return async (dispatch) => {
    dispatch(getBookRequest());

    try {
      const response = await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`);
      dispatch(getBookSuccess(response.data));
    } catch (error) {
      dispatch(getBookFailure(error.message));
    }
  };
};


export const postBookRequest = () => {
  return {
    type: POST_BOOK_REQUEST,
  };
};

export const postBookSuccess = (payload) => {
  return {
    type: POST_BOOK_SUCCESS,
    payload: payload,
  };
};

export const postBookFailure = (error) => {
  return {
    type: POST_BOOK_FAILURE,
    payload: error,
  };
};

export const postBook = (newBook) => {
  return async (dispatch) => {
    dispatch(postBookRequest());

    try {
      const response = await axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`, newBook);
      dispatch(postBookSuccess(response.data));
    } catch (error) {
      dispatch(postBookFailure(error.message));
    }
  };
};
