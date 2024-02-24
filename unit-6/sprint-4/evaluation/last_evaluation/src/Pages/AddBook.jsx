import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBook } from "../Redux/BookReducer/action"; 


export const AddBook = () => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.books.success); 

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    published_year: "",
    genre: "",
    isbn: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postBook(formData));
  };

  return (
    <div data-testid="add-new-page">
      <form className="form" data-testid="addbook-form" onSubmit={handleSubmit}>
        <p className="form-title">Add New Book</p>
        <div className="input-container">
          <span>Book Name</span>
          <input
            type="text"
            data-testid="book-title"
            placeholder="Enter Book Name"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <span>Author Name</span>
          <input
            type="text"
            data-testid="book-author"
            placeholder="Enter Author Name"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <span>Book published year</span>
          <input
            type="text"
            data-testid="book-published_year"
            placeholder="Enter book published year"
            name="published_year"
            value={formData.published_year}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <span>Book Genre</span>
          <input
            type="text"
            data-testid="book-genre"
            placeholder="Enter Book genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <span style={{ color: "black" }}>Book isbn no</span>
          <input
            type="text"
            data-testid="book-isbn"
            placeholder="Enter Book isbn no"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit">
          Add Book
        </button>
        {success && <p style={{ color: "green" }}>Book added successfully!</p>}
      </form>
    </div>
  );
};
