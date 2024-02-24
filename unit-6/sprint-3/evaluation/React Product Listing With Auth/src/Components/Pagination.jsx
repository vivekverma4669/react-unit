import React, { useState } from "react";

function Pagination({ current, totalPages, onChange }) {
  const [currentPage, setCurrentPage] = useState(current);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onChange(currentPage - 1);
    }
  }; 

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onChange(currentPage + 1);
    }
  };

  return (
    <div data-testid="pagination-container">
      <button data-testid="prev-page" onClick={handlePrevClick} disabled={currentPage === 1}>
        PREV
      </button>
      <button data-testid="current-page">{currentPage}</button>

      <button data-testid="next-page" onClick={handleNextClick} disabled={currentPage === totalPages}>
        NEXT
      </button>
      <div>
        Total Pages: <b data-testid="total-pages">{totalPages}</b>{" "}
      </div>
    </div>
  );
}

export default Pagination;
