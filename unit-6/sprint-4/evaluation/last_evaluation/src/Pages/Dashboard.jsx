import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataBooks } from "../Redux/BookReducer/action"; 
import { Loading } from "../Components/Loading";
import {BookCard} from "../Components/BookCard"; 

export const Dashboard = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);

  useEffect(() => {
    dispatch(getDataBooks());
  }, [dispatch]);

  return (
    <div style={{ textAlign: "center" }} id="dashBoard">
      <h1>Welcome to Masai Library Dashboard</h1>
      <div data-testid="all-books">
        {loading && <Loading />}
       
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
  
      </div>
    </div>
  );
};
