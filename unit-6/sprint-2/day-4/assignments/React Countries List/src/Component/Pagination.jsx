function Pagination({ current, total , onChange}) {


    const isPrevDisabled = current === 1;
    const isNextDisabled = current === total;
  
    const handlePrevClick = () => {
      if (!isPrevDisabled) {
        onChange(current - 1);
      }
    };
  
    const handleNextClick = () => {
      if (!isNextDisabled) {
        onChange(current + 1);
      }
    };

    const prev = ( <button data-testid="prev-page" disabled={isPrevDisabled} onClick={handlePrevClick}> Prev </button>);
    const currentPage = <button data-testid="current-page">{current}</button>;
    const next = ( <button data-testid="next-page" disabled={isNextDisabled}  onClick={handleNextClick}>  Next </button>);

  return (
  <div data-testid="page-container">
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{total}</b>
      </div>
    </div>
  );
}

export default Pagination;
