import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/Loader";
import ProductList from "../Components/ProductList";
import Pagination from "../Components/Pagination";

function Dashboard() {
  const { authState, logoutUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getData = async (page = 1, order = sortOrder) => {
    setLoading(true);
    try {
      const apiUrl = sortOrder
        ? `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&order=${order}&sort=price`
        : `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10`;

      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log(data.data);
      setProducts(data.data);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [sortOrder, currentPage]);

  const handleSortChange = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div data-testid="sort-container">
        <button
          data-testid="low-to-high"
          onClick={handleSortChange}
          disabled={sortOrder === "asc"}
        >
          Sort low to high
        </button>
        <button
          data-testid="high-to-low"
          onClick={handleSortChange}
          disabled={sortOrder === "desc"}
        >
          Sort high to low
        </button>
      </div>
      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading ? <Loader /> : <ProductList products={products} />}
        <Pagination
          current={currentPage}
          totalPages={totalPages}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Dashboard;
