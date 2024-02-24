const Book = ({title,author, isbn, category,publication_date}) => {
  return (
    <div className="book">
      {/* Below h2 tag should have title */
      }
      <h2>{title}</h2>
      {/* the below span tags should have respective text content */}
      <p>
        Author: <span>{author}</span>
      </p>
      <p>
        ISBN:<span>{isbn}</span>
      </p>
      <p>
        Category: <span>{category}</span>
      </p>
      <p>
        Publication Date:<span>{publication_date}</span>
      </p>
    </div>
  );
};

export default Book;
