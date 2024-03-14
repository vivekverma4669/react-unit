export const Dashboard = () => {
  return (
    <div style={{ textAlign: "center" }} id="dashBoard">
      <h1>Welcome to Masai Library Dashboard</h1>
      <div data-testid="all-books">{/* render all the books */}</div>
    </div>
  );
};
