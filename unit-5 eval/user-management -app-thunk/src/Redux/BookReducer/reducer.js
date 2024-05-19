import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  POST_BOOK_FAILURE,
  POST_BOOK_REQUEST,
  POST_BOOK_SUCCESS,
} from "./actionTypes";

// Initial State
const initialState = {
  books: [],
  loading: false,
  error: null,
  success: false, // Add a success field to track success state
};

// Reducer
export const booksReducer = () => {};
