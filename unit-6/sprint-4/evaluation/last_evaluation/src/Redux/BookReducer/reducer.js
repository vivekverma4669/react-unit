import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  POST_BOOK_FAILURE,
  POST_BOOK_REQUEST,
  POST_BOOK_SUCCESS,
} from "./actionTypes";

const initialState = {
  books: [],
  loading: false,
  error: null,
  success: false,
};

 export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return { ...state, loading: true, error: null, success: false };
    case GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload, loading: false, error: null, success: true };
    case GET_BOOKS_FAILURE:
      return { ...state, loading: false, error: action.payload, success: false };
    case POST_BOOK_REQUEST:
      return { ...state, loading: true, error: null, success: false };
    case POST_BOOK_SUCCESS:
      return { ...state, books: [...state.books, action.payload], loading: false, error: null, success: true };
    case POST_BOOK_FAILURE:
      return { ...state, loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};


