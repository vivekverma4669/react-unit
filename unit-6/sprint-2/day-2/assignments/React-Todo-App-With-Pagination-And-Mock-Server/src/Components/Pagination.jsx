function Pagination({ currentPage, todosPerPage, totalTodos, setCurrentPage, setTodosPerPage }) {
  const totalPages = Math.ceil(totalTodos / todosPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (

    <div data-testid="pagination">
      {/* add PREVIOUS button and div with current page number and NEXT button */}

      <button  disabled={currentPage===1} onClick={handlePrevious} >PREVIOUS</button>
      <div>{currentPage}</div>
      <button  disabled={currentPage=== totalPages} onClick={handleNext} >NEXT</button>
    </div>
  );
}

export default Pagination;
