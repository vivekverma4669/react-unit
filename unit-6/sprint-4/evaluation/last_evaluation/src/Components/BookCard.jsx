export const BookCard = ({ book }) => {
  return (
    <div className="book_card">
      <img
        src="https://images.unsplash.com/photo-1519764340700-3db40311f21e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
        alt="book img"
        className="img"
      />
      <div>
        <h3 className="book-name">Book Name : {book.title}</h3>
        <h4 className="book-author">Author : {book.author}</h4>
      </div>
    </div>
  );
}; 
  