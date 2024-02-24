import React, { useState, useEffect} from "react";
import Book from "./Book";
const BookList = () => {
  const [books, setBooks] = useState([]);
  const [ loading, setLoading] =useState(true);
  const [ filter, setFilter] = useState('all');
  const [ sortBy, setSort] = useState('');
  const [ sortOrder, setSortOrder] =useState('');
  const [ search, setSearch] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`;
      const queryparams = [];

      if(filter !== 'all') {
        queryparams.push(`category=${filter}`);
      }
      if(sortBy && sortOrder) {
        queryparams.push(`_sort=${sortBy}&_order=${sortOrder}`);
      }
      if(search) {
        queryparams.push(`q=${search}`);
      }

      if(queryparams.length>0){
        const query = queryparams.join('&');
        console.log(query);
        const fullurl = `${url}?${query}`;
        const response = await fetch(fullurl);
        const data = await response.json();
        setBooks(data);
        
      }else{
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data);
      }
      setLoading(false);


      console.log(queryparams);
    };
    fetchData();


  }, [filter, sortBy, sortOrder, search]);


 
  return (
    <>
      <div className="filter-options">
        <label>
          Category:
          <select 
          className="filter-by-category"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="Classic">Classic</option>
            <option value="Dystopian">Dystopian</option>
            <option value="Romance">Romance</option>
            <option value="Coming of age">Coming of Age</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Political satire">Political Satire</option>
            <option value="Mystery">Mystery</option>
            <option value="Epic poem">Epic Poem</option>
          </select>
        </label>

        <label>
          Sort by:
          <select 
          className="sort-by"
          value={sortBy}
          onChange={(e) => setSort(e.target.value)}>
            <option value="">Select an option</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="category">Category</option>
            <option value="publication_date">Publication Date</option>
          </select>
        </label>
        <label>
          Order:
          <select 
          className="order"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}>
            <option value="">Select an option</option>
            <option value="asc">Ascending Order</option>
            <option value="desc">Descending Order</option>
          </select>
        </label>
        <label>
          Search:
          <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
           />
        </label>
      </div>

      <div className="book-list">
        {loading ? (
          <h1 className="loading-text">Loading...</h1>
        ) : (
          books.map((book) => (
            <Book
              key={book.id}
              title={book.title}
              author={book.author}
              isbn={book.isbn}
              category={book.category}
              publication_date={book.publication_date}
            />
          )
          )
        )}
      </div>
    </>
  );
};
export default BookList;