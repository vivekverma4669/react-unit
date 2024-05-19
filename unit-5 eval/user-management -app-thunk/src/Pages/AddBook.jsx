export const AddBook = () => {
  return (
    <div data-testid="add-new-page">
      <form className="form" data-testid="addbook-form">
        <p className="form-title">Add New Book</p>
        <div className="input-container">
          <span>Book Name</span>
          <input
            type="text"
            data-testid="book-title"
            placeholder="Enter Book Name"
            name="title"
          />
        </div>
        <div className="input-container">
          <span>Author Name</span>
          <input
            type="text"
            data-testid="book-author"
            placeholder="Enter Author Name"
            name="author"
          />
        </div>
        <div className="input-container">
          <span>Book published year</span>
          <input
            type="text"
            data-testid="book-published_year"
            placeholder="Enter book published year"
            name="published_year"
          />
        </div>
        <div className="input-container">
          <span>Book Genre</span>
          <input
            type="text"
            data-testid="book-genre"
            placeholder="Enter Book genre"
            name="genre"
          />
        </div>
        <div className="input-container">
          <span style={{ color: "black" }}>Book isbn no</span>
          <input
            type="text"
            data-testid="book-isbn"
            placeholder="Enter Book isbn no"
            name="isbn"
          />
        </div>
        <button type="submit" className="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};
