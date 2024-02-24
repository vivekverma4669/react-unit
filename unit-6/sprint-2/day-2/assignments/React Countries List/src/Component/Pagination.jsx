function Pagination({current ,onChange, totalPages}) {
  const prev = (
    <button data-testid="prev-page" disabled={current==1} onClick={()=>onChange(current-1)}> Prev  </button>
  );


  const currentPage = <button data-testid="current-page">{current}</button>;
  const next = (
    <button
      data-testid="next-page"
      onClick={() => onChange(current + 1)}
      disabled={current === totalPages}
    >
      Next
    </button>
  );

  return (
  <div data-testid="page-container">
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{totalPages}</b>
      </div>
    </div>
  );
}

export default Pagination;
